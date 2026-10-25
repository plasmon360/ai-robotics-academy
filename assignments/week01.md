# Week 1 — Degrees of Freedom and Your First Python Robot Arm

**8 hours · free resources · no hardware required**

## Day 1 — Introduction (1.5 hours)
Read [MIT Introduction to Robotics, Chapter 1](https://ocw.mit.edu/courses/2-12-introduction-to-robotics-fall-2005/resources/chapter1/). Identify links, joints, actuators and end effectors on a sketch of a two-link arm.

## Day 2 — DOF (1.5 hours)
Watch [Modern Robotics Chapter 2 videos](https://modernrobotics.northwestern.edu/chapters/chapter2/), especially lectures 2.1 (rigid body DOF), 2.2 (robot DOF), and 2.3 (configuration space). Read **Modern Robotics**, Chapter 2, Sections **2.1–2.3**, from the [free textbook](https://hades.mech.northwestern.edu/index.php/Modern_Robotics). Explain why three noncollinear points on one rigid body contribute 3 + 2 + 1 = 6 DOF.

## Day 3 — Constraints and derivation (2 hours)
Read Chapter 2, Sections **2.4–2.5** (constraints, task space and workspace). Explain why a helical joint has one DOF using z = p θ / (2π). For p = 4 mm/revolution, calculate displacement for 90°, 180°, and 720°. Derive two-link forward kinematics:

- x = L1 cos(θ1) + L2 cos(θ1 + θ2)
- y = L1 sin(θ1) + L2 sin(θ1 + θ2)

Install: `python3 -m venv .venv && source .venv/bin/activate && pip install numpy matplotlib pytest`.

## Day 4 — Python assignment (2 hours)
Create `week01/robot_arm.py` and implement:

```python
import numpy as np

class RobotArm2D:
    def __init__(self, L1=1.0, L2=0.7):
        self.L1, self.L2 = L1, L2

    def forward_kinematics(self, theta1, theta2):
        base = np.array([0.0, 0.0])
        # TODO: compute elbow as a NumPy array
        # TODO: compute end_effector as a NumPy array
        raise NotImplementedError
```

Angles are **radians**. Return `base, elbow, end_effector`. Plot links with Matplotlib. Verify with `np.testing.assert_allclose`:

| θ1 | θ2 | Expected end effector |
|---|---|---|
| 0° | 0° | (1.7, 0.0) |
| 90° | 0° | (0.0, 1.7) |
| 0° | 180° | (0.3, 0.0) |
| 90° | 90° | (-0.7, 1.0) |

**Bonus:** Animate 100 intermediate configurations between (0°, 0°) and (90°, 45°) with [Matplotlib animation](https://matplotlib.org/stable/api/animation_api.html) and plot the end-effector path.

## Day 5 — Review and commit (1 hour)
Write `week01/notes.md` answering: (1) Why does a free rigid body have six DOF? (2) Why is a helical joint one DOF? (3) What is configuration space? (4) Joint space versus task space? (5) Why does a two-link arm have two DOF?

**Completion:** Four numerical tests pass, a plot renders, and notes are committed.
