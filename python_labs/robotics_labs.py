"""Academy Phase 2: implement the TODOs, then run pytest.

Setup:
    python -m pip install numpy pytest matplotlib
    python -m pytest python_labs/test_robotics_labs.py -q
"""
import numpy as np


def forward_kinematics(theta1: float, theta2: float, L1: float = 1.0, L2: float = 0.7) -> np.ndarray:
    """Return end-effector [x, y]. Angles are in radians."""
    # TODO: implement planar two-link forward kinematics.
    raise NotImplementedError("Implement forward_kinematics")


def jacobian(theta1: float, theta2: float, L1: float = 1.0, L2: float = 0.7) -> np.ndarray:
    """Return 2x2 Jacobian mapping [theta1_dot, theta2_dot] to [x_dot, y_dot]."""
    # TODO: analytically differentiate forward_kinematics.
    raise NotImplementedError("Implement jacobian")


def pid_step(error: float, integral: float, derivative: float, kp: float, ki: float, kd: float, torque_limit: float = 20.0) -> float:
    """Return bounded PID torque; clamp the final output to ±torque_limit.

    Anti-windup of the *integral state* is handled in the caller.
    """
    # TODO: compute PID output and apply torque saturation.
    raise NotImplementedError("Implement pid_step")
