"""Automated tests for the three Phase 2 labs.

These are intentionally failing until the learner implements the functions.
Run from the repository root:
    python -m pip install numpy pytest
    python -m pytest python_labs/test_robotics_labs.py -q
"""
import numpy as np
import pytest
from python_labs.robotics_labs import forward_kinematics, jacobian, pid_step


@pytest.mark.parametrize("a,b,expected", [
    (0, 0, [1.7, 0]),
    (90, 0, [0, 1.7]),
    (0, 180, [0.3, 0]),
    (90, 90, [-0.7, 1.0]),
])
def test_forward_kinematics(a, b, expected):
    actual = forward_kinematics(np.deg2rad(a), np.deg2rad(b))
    np.testing.assert_allclose(actual, expected, atol=1e-9)


def test_jacobian_at_zero():
    expected = [[0, 0], [1.7, 0.7]]
    np.testing.assert_allclose(jacobian(0, 0), expected, atol=1e-9)


def test_jacobian_matches_finite_difference():
    a, b, eps = 0.3, -0.8, 1e-6
    numerical = np.column_stack([
        (forward_kinematics(a + eps, b) - forward_kinematics(a - eps, b)) / (2 * eps),
        (forward_kinematics(a, b + eps) - forward_kinematics(a, b - eps)) / (2 * eps),
    ])
    np.testing.assert_allclose(jacobian(a, b), numerical, atol=1e-6)


def test_jacobian_singular_at_straight_arm():
    assert abs(np.linalg.det(jacobian(0.4, 0))) < 1e-9


def test_pid_zero_error():
    assert pid_step(0, 0, 0, 10, 2, 4) == pytest.approx(0)


def test_pid_terms():
    assert pid_step(0.2, 0.5, -0.1, 10, 2, 4) == pytest.approx(2.6)


def test_pid_torque_saturation():
    assert pid_step(10, 0, 0, 10, 0, 0, torque_limit=5) == pytest.approx(5)
    assert pid_step(-10, 0, 0, 10, 0, 0, torque_limit=5) == pytest.approx(-5)
