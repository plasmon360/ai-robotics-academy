# AI Robotics Academy 2.0

An open, self-paced robotics course for an engineer with an AI/Python background.

**36-week roadmap · 8 modules · 30 interactive lessons · 30 Python lab prompts · 30 quizzes · 288 hours of planned study.**

## Website

Custom domain: **https://robotics-academy.balajuluri.com/**

The `CNAME` file is configured. Publishing also requires GitHub Pages enabled on the `main` branch and a CNAME DNS record at your DNS provider pointing `robotics-academy` to `plasmon360.github.io`. DNS and HTTPS verification may take time.

## Features

- **Interactive lessons:** eight modules, 30 lessons with learning objectives, reading links, guided steps, Python lab prompts and multiple-choice knowledge checks.
- **Progress dashboard:** lessons, labs, quizzes and 36-week study sessions.
- **Personal notes:** editable notes per lesson, saved automatically in browser localStorage.
- **Search:** filter lessons by title.
- **Roadmap:** 36 weeks of daily study sessions (five sessions per week, eight hours total).
- **Resources:** a browsable library of free lectures, documentation and source repositories.
- **Detailed Week 1 assignment:** [Robot DOF and forward kinematics](assignments/week01.md).

**Scope note:** Labs are currently guided assignments, not in-browser Python execution or auto-graded coding tests. Quiz checks run in-browser. Only Week 1 has a full standalone assignment; other lessons have lab prompts and study steps. Progress is local to each browser/device.

## Curriculum

1. Foundations — frames, DOF, rotations, Jacobians, simulators.
2. Dynamics & Control — robot dynamics, PID, RRT, SLAM.
3. Perception — camera calibration, 6D pose, Kalman filtering.
4. ROS 2 — nodes, TF2, URDF, MoveIt, Nav2 and simulation ecosystems.
5. Reinforcement Learning — MDPs, PPO, SAC, domain randomization.
6. Imitation Learning — BC, DAgger, ACT, diffusion policies, LeRobot.
7. VLA — VLM action heads, datasets, SmolVLA fine-tuning, RL adaptation.
8. Capstone — simulated fetch task, evaluation, safety and SO-101 deployment planning.

## Run locally

Open `index.html` in a modern browser. No build tools or backend required.

## Sources and license

All external resources are linked from `course.js`, including Northwestern Modern Robotics, MIT OCW, ROS 2, MuJoCo, MoveIt 2, OpenCV, PyTorch, Gymnasium, Hugging Face LeRobot and SO-101. Linked material belongs to its respective authors. The course website is intended as an original study guide, not a reproduction of third-party course content.

## Phase 2 — Interactive labs (implemented)

Open [Interactive Robotics Labs](labs/) from the homepage, or directly at `/labs/` on the published website.

- **Lab 01: Forward kinematics:** live two-link arm with sliders for two joint angles and two link lengths; end-effector coordinates and path trace.
- **Lab 02: Jacobian:** live end-effector velocity vector, Jacobian determinant, and singularity exploration.
- **Lab 03: PID control:** step-response visualization with adjustable Kp, Ki, Kd and target, torque saturation, and clamped integral state.
- **Python starter:** [robotics_labs.py](python_labs/robotics_labs.py) includes three intentionally unfinished functions for learners to implement.
- **Automated checks:** [pytest suite](python_labs/test_robotics_labs.py) validates forward kinematics, analytic Jacobian vs finite differences, singularity and PID output. Tests fail until TODOs are implemented.
- **Jupyter notebook:** [Forward Kinematics Lab](notebooks/01_forward_kinematics.ipynb) contains derivation, coding cells, four checks and plotting.

To run the Python tests from the repository root:

```bash
python -m pip install numpy pytest matplotlib
python -m pytest python_labs/test_robotics_labs.py -q
```

The **browser simulations run in JavaScript**, not Python; the downloadable exercises run in your local Python environment. Lab completion syncs with the existing browser-local Academy dashboard using the same localStorage key. The lab completion button is self-reported and does not automatically inspect your local Python tests.
