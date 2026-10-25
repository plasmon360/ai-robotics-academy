// Academy 2.0: 8 modules, 30 lessons, each with a lab and knowledge check.
const MODULES=[
  {
    "title": "Foundations — Fast-Tracked for Engineers",
    "subtitle": "Frames, rotations, configuration space"
  },
  {
    "title": "Dynamics & Control",
    "subtitle": "From Lagrange to reliable tracking"
  },
  {
    "title": "Perception for Robots",
    "subtitle": "Pixels to poses"
  },
  {
    "title": "ROS 2 — Robot Software",
    "subtitle": "Nodes, frames, planning stacks"
  },
  {
    "title": "Reinforcement Learning for Robots",
    "subtitle": "MDPs, PPO/SAC, sim-to-real"
  },
  {
    "title": "Imitation Learning & LeRobot",
    "subtitle": "Demonstrations to policies"
  },
  {
    "title": "Foundation Models & VLA",
    "subtitle": "Vision, language, actions"
  },
  {
    "title": "Capstone — Train & Deploy",
    "subtitle": "Integrate, evaluate, document"
  }
];
const LESSONS=[
  {
    "id": "m1l1",
    "module": 0,
    "title": "What a robot actually is: configuration, DOF & workspaces",
    "primary": "Modern Robotics Chapter 2",
    "secondary": "MIT Robotics Chapter 1",
    "lab": "Implement a two-link planar arm; plot reachable points.",
    "quiz": {
      "question": "A two-link planar revolute arm has how many joint DOF?",
      "options": [
        "1",
        "2",
        "3"
      ],
      "correct": 1
    },
    "minutes": 30,
    "concept": "Study what a robot actually is: configuration, dof & workspaces using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m1l2",
    "module": 0,
    "title": "Rotations: SO(3), exponentials & screw axes",
    "primary": "Modern Robotics Chapter 3",
    "secondary": "NumPy",
    "lab": "Implement Rz(theta); test orthogonality and composition.",
    "quiz": {
      "question": "Which property must a rotation matrix satisfy?",
      "options": [
        "RᵀR = I",
        "det(R) = 0",
        "Rᵀ = -R"
      ],
      "correct": 0
    },
    "minutes": 30,
    "concept": "Study rotations: so(3), exponentials & screw axes using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m1l3",
    "module": 0,
    "title": "Velocity kinematics: the Jacobian",
    "primary": "Modern Robotics Chapter 5",
    "secondary": "NumPy",
    "lab": "Derive and plot the 2R Jacobian; detect singularities.",
    "quiz": {
      "question": "What does the manipulator Jacobian map?",
      "options": [
        "Pixels to depth",
        "Joint velocities to end-effector velocity",
        "Torques to mass"
      ],
      "correct": 1
    },
    "minutes": 30,
    "concept": "Study velocity kinematics: the jacobian using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m1l4",
    "module": 0,
    "title": "Python robotics toolchain: URDF & first simulator",
    "primary": "MuJoCo",
    "secondary": "ROS 2 URDF",
    "lab": "Load a two-joint model in MuJoCo; command joint positions.",
    "quiz": {
      "question": "What does URDF describe?",
      "options": [
        "Robot links and joints",
        "Training labels only",
        "GPU drivers"
      ],
      "correct": 0
    },
    "minutes": 30,
    "concept": "Study python robotics toolchain: urdf & first simulator using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m2l1",
    "module": 1,
    "title": "Robot dynamics: M(q)q̈ + C + g = τ",
    "primary": "Modern Robotics Chapter 8",
    "secondary": "MIT Underactuated Robotics",
    "lab": "Numerically simulate a pendulum with gravity and damping.",
    "quiz": {
      "question": "What does M(q) represent?",
      "options": [
        "Inertia matrix",
        "Camera matrix",
        "Reward function"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study robot dynamics: m(q)q̈ + c + g = τ using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m2l2",
    "module": 1,
    "title": "PID: tuning, anti-windup & tracking",
    "primary": "MIT Underactuated Robotics",
    "secondary": "MuJoCo",
    "lab": "Implement PID with saturation and anti-windup; compare responses.",
    "quiz": {
      "question": "Which PID term accumulates persistent error?",
      "options": [
        "Proportional",
        "Integral",
        "Derivative"
      ],
      "correct": 1
    },
    "minutes": 40,
    "concept": "Study pid: tuning, anti-windup & tracking using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m2l3",
    "module": 1,
    "title": "Motion planning: configuration space & RRT",
    "primary": "MoveIt 2",
    "secondary": "Modern Robotics Chapter 10",
    "lab": "Implement a 2D RRT planner around obstacles.",
    "quiz": {
      "question": "What is RRT primarily used for?",
      "options": [
        "Sampling-based motion planning",
        "Camera calibration",
        "Supervised labeling"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study motion planning: configuration space & rrt using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m2l4",
    "module": 1,
    "title": "Mobile robots & SLAM",
    "primary": "ROS 2 tutorials",
    "secondary": "MIT Underactuated Robotics",
    "lab": "Build a toy occupancy grid from range observations.",
    "quiz": {
      "question": "SLAM estimates which two things together?",
      "options": [
        "Torque and voltage",
        "Map and robot pose",
        "Gripper and color"
      ],
      "correct": 1
    },
    "minutes": 40,
    "concept": "Study mobile robots & slam using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m3l1",
    "module": 2,
    "title": "Camera geometry & calibration",
    "primary": "OpenCV",
    "secondary": "NumPy",
    "lab": "Project 3D points into a camera; estimate a simple intrinsic matrix.",
    "quiz": {
      "question": "What does the focal length influence?",
      "options": [
        "Pixel projection scale",
        "Motor torque constant",
        "Policy discount factor"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study camera geometry & calibration using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m3l2",
    "module": 2,
    "title": "6D object pose & grasp detection",
    "primary": "OpenCV",
    "secondary": "PyTorch",
    "lab": "Detect an object and compute a candidate grasp pose in camera coordinates.",
    "quiz": {
      "question": "What makes a rigid object's pose 6D?",
      "options": [
        "3 position + 3 orientation",
        "6 cameras",
        "6 joints always"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study 6d object pose & grasp detection using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m3l3",
    "module": 2,
    "title": "State estimation: Kalman filters",
    "primary": "MIT Underactuated Robotics",
    "secondary": "NumPy",
    "lab": "Implement a 1D Kalman filter for noisy position observations.",
    "quiz": {
      "question": "A Kalman filter combines which two ingredients?",
      "options": [
        "Prior prediction and measurement",
        "Images and text only",
        "PID and RRT"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study state estimation: kalman filters using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m4l1",
    "module": 3,
    "title": "Nodes, topics, services & actions",
    "primary": "ROS 2 tutorials",
    "secondary": "ROS 2 URDF",
    "lab": "Create a ROS 2 Python publisher and subscriber.",
    "quiz": {
      "question": "Which ROS 2 mechanism is suited to streaming sensor data?",
      "options": [
        "Topics",
        "Static parameters",
        "Build scripts"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study nodes, topics, services & actions using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m4l2",
    "module": 3,
    "title": "TF2, URDF & robot_state_publisher",
    "primary": "ROS 2 URDF",
    "secondary": "ROS 2 tutorials",
    "lab": "Define two frames and publish their transforms.",
    "quiz": {
      "question": "What is TF2 used for?",
      "options": [
        "Coordinate-frame transforms",
        "Gradient descent",
        "Camera compression"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study tf2, urdf & robot_state_publisher using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m4l3",
    "module": 3,
    "title": "Nav2 & MoveIt 2",
    "primary": "MoveIt 2",
    "secondary": "ROS 2 tutorials",
    "lab": "Plan a simulated arm trajectory; compare to navigation planning.",
    "quiz": {
      "question": "MoveIt 2 primarily targets which task?",
      "options": [
        "Manipulator motion planning",
        "Email delivery",
        "Image classification"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study nav2 & moveit 2 using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m4l4",
    "module": 3,
    "title": "Gazebo vs MuJoCo vs Isaac vs PyBullet",
    "primary": "MuJoCo",
    "secondary": "ROS 2 tutorials",
    "lab": "Document simulator tradeoffs and reproduce one physics experiment.",
    "quiz": {
      "question": "Which factor matters most for simulator choice?",
      "options": [
        "Task fidelity and integration",
        "Logo color",
        "Repository age alone"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study gazebo vs mujoco vs isaac vs pybullet using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m5l1",
    "module": 4,
    "title": "MDPs & Gymnasium contract",
    "primary": "Gymnasium",
    "secondary": "PyTorch",
    "lab": "Implement a minimal environment with reset and step.",
    "quiz": {
      "question": "What does an RL action cause?",
      "options": [
        "A state transition",
        "A guaranteed reward",
        "A model download"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study mdps & gymnasium contract using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m5l2",
    "module": 4,
    "title": "Q-learning, PPO & SAC",
    "primary": "Gymnasium",
    "secondary": "PyTorch",
    "lab": "Train a tabular Q-learning baseline; compare PPO and SAC conceptually.",
    "quiz": {
      "question": "Which algorithm is off-policy and entropy-regularized?",
      "options": [
        "PPO",
        "SAC",
        "Behavior cloning"
      ],
      "correct": 1
    },
    "minutes": 40,
    "concept": "Study q-learning, ppo & sac using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m5l3",
    "module": 4,
    "title": "Domain randomization & reality gap",
    "primary": "MuJoCo",
    "secondary": "MIT Underactuated Robotics",
    "lab": "Randomize friction and mass during simulation rollouts.",
    "quiz": {
      "question": "Why randomize simulation parameters?",
      "options": [
        "Improve robustness to real-world variation",
        "Remove all dynamics",
        "Guarantee perfect transfer"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study domain randomization & reality gap using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m5l4",
    "module": 4,
    "title": "Train PPO on a simulated task",
    "primary": "Gymnasium",
    "secondary": "PyTorch",
    "lab": "Train and evaluate a PPO agent with success-rate plots.",
    "quiz": {
      "question": "Why use a held-out evaluation seed?",
      "options": [
        "Measure generalization",
        "Increase training loss",
        "Disable exploration"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study train ppo on a simulated task using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m6l1",
    "module": 5,
    "title": "Behavior cloning, covariate shift & DAgger",
    "primary": "LeRobot",
    "secondary": "PyTorch",
    "lab": "Train a supervised policy; perturb observations and measure failure.",
    "quiz": {
      "question": "What causes compounding errors in naive behavior cloning?",
      "options": [
        "Covariate shift",
        "Image resolution only",
        "Too many labels"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study behavior cloning, covariate shift & dagger using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m6l2",
    "module": 5,
    "title": "ACT & action chunking",
    "primary": "LeRobot source",
    "secondary": "PyTorch",
    "lab": "Train a model to predict multiple future actions per observation.",
    "quiz": {
      "question": "What does action chunking predict?",
      "options": [
        "A sequence of actions",
        "Only the next pixel",
        "A robot CAD file"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study act & action chunking using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m6l3",
    "module": 5,
    "title": "Diffusion Policy",
    "primary": "LeRobot source",
    "secondary": "PyTorch",
    "lab": "Build a toy denoising model for 2D action trajectories.",
    "quiz": {
      "question": "What is iteratively denoised in diffusion policy?",
      "options": [
        "Action trajectories",
        "URDF files",
        "Camera intrinsics"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study diffusion policy using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m6l4",
    "module": 5,
    "title": "LeRobot workflow: teleop → train → eval",
    "primary": "LeRobot",
    "secondary": "LeRobot datasets",
    "lab": "Create a dataset schema and a reproducible training/evaluation checklist.",
    "quiz": {
      "question": "What should be separated to avoid evaluation leakage?",
      "options": [
        "Training and evaluation episodes",
        "Robot links and joints",
        "Code and comments"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study lerobot workflow: teleop → train → eval using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m7l1",
    "module": 6,
    "title": "Anatomy of a VLA: VLM backbone + action head",
    "primary": "SmolVLA",
    "secondary": "LeRobot",
    "lab": "Sketch a VLA architecture and tensor shapes.",
    "quiz": {
      "question": "What is the output of a VLA policy?",
      "options": [
        "Robot actions",
        "Only image captions",
        "Only joint limits"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study anatomy of a vla: vlm backbone + action head using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m7l2",
    "module": 6,
    "title": "Open X-Embodiment & dataset scale",
    "primary": "LeRobot datasets",
    "secondary": "LeRobot",
    "lab": "Compare embodiment-specific observation/action schemas.",
    "quiz": {
      "question": "Why is cross-robot data alignment difficult?",
      "options": [
        "Different action spaces and sensors",
        "Identical robot kinematics",
        "No timestamps"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study open x-embodiment & dataset scale using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m7l3",
    "module": 6,
    "title": "Fine-tune SmolVLA on a task",
    "primary": "SmolVLA",
    "secondary": "LeRobot",
    "lab": "Prepare a tiny LeRobot dataset and document a fine-tuning command.",
    "quiz": {
      "question": "Why use a held-out task evaluation set?",
      "options": [
        "Measure policy generalization",
        "Reduce disk space only",
        "Avoid calibration"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study fine-tune smolvla on a task using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m7l4",
    "module": 6,
    "title": "RL fine-tuning & modern VLA stacks",
    "primary": "SmolVLA",
    "secondary": "PyTorch",
    "lab": "Compare offline imitation and online RL adaptation in a design memo.",
    "quiz": {
      "question": "What distinguishes online RL fine-tuning?",
      "options": [
        "Environment interaction and rewards",
        "No observations",
        "Only static labels"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study rl fine-tuning & modern vla stacks using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m8l1",
    "module": 7,
    "title": "Capstone: fetch-a-cup in simulation",
    "primary": "MoveIt 2",
    "secondary": "MuJoCo",
    "lab": "Write task specification; integrate perception, planning and grasp policy.",
    "quiz": {
      "question": "What defines capstone success best?",
      "options": [
        "Measured task completion rate",
        "Number of code files",
        "Model parameter count"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study capstone: fetch-a-cup in simulation using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m8l2",
    "module": 7,
    "title": "Evaluation, safety & sim-to-real",
    "primary": "SO-101 hardware",
    "secondary": "LeRobot",
    "lab": "Create success-rate, latency, collision and recovery test protocols.",
    "quiz": {
      "question": "What should happen after a safety boundary violation?",
      "options": [
        "Stop or enter safe state",
        "Increase motor torque",
        "Ignore the event"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study evaluation, safety & sim-to-real using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  },
  {
    "id": "m8l3",
    "module": 7,
    "title": "Portfolio, real robot & next steps",
    "primary": "SO-101 hardware",
    "secondary": "SmolVLA",
    "lab": "Produce demo video, report, and physical SO-101 deployment plan.",
    "quiz": {
      "question": "What makes an evaluation reproducible?",
      "options": [
        "Documented conditions, seeds and metrics",
        "A single successful clip",
        "No logs"
      ],
      "correct": 0
    },
    "minutes": 40,
    "concept": "Study portfolio, real robot & next steps using the linked open materials. Identify the key assumptions, write the governing equations or data flow, and explain how this concept contributes to reliable robot behavior.",
    "steps": [
      "Read or watch the primary source and summarize three key ideas.",
      "Work through one derivation or documented example from the secondary source.",
      "Complete the Python lab and save a reproducible result.",
      "Answer the quiz and record one limitation or failure mode."
    ]
  }
];
