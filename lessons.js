// AI-first robotics curriculum: 36 weeks, 8 modules, 30 lessons.
const MODULES=[
  {
    "title": "Robotics Essentials",
    "subtitle": "4 weeks · Learn robot state, actions, frames, and basic control"
  },
  {
    "title": "Robot Simulation",
    "subtitle": "4 weeks · Build environments before training policies"
  },
  {
    "title": "Reinforcement Learning for Robots",
    "subtitle": "6 weeks · Train, diagnose and evaluate policies"
  },
  {
    "title": "Robot Perception",
    "subtitle": "4 weeks · Convert sensor measurements into useful state"
  },
  {
    "title": "Autonomous Manipulation",
    "subtitle": "4 weeks · Plan safe and repeatable robot actions"
  },
  {
    "title": "Imitation Learning and LeRobot",
    "subtitle": "5 weeks · Learn from demonstrations"
  },
  {
    "title": "Foundation Models and VLA",
    "subtitle": "5 weeks · Connect language, vision and robot actions"
  },
  {
    "title": "SO-101 Real-Robot Capstone",
    "subtitle": "4 weeks · Integrate, test and document a physical system"
  }
];
const LESSONS=[
  {
    "id": "m1l1",
    "module": 0,
    "title": "Robot joints, state, actions and degrees of freedom",
    "primary": "NPTEL Robotics (IIT Kharagpur)",
    "secondary": "Gymnasium documentation",
    "lab": "Build a minimal 2-joint arm model and label observations versus actions.",
    "quiz": {
      "question": "Which variable is usually an observation rather than a command?",
      "options": [
        "Measured joint angle",
        "Desired motor torque",
        "Target joint position"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "A robot policy does not move an arm directly: it outputs commands interpreted by a controller. Distinguish joint position, velocity, torque, observation and action spaces.",
    "steps": [
      "Study the relevant section of NPTEL Robotics (IIT Kharagpur); write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Build a minimal 2-joint arm model and label observations versus actions.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m1l2",
    "module": 0,
    "title": "Coordinate frames without the heavy math",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "Modern Robotics Chapter 3",
    "lab": "Use NumPy to transform a 2D point between world, base and tool frames.",
    "quiz": {
      "question": "Why must a position be associated with a frame?",
      "options": [
        "To reduce memory usage",
        "To interpret its coordinates correctly",
        "To increase motor torque"
      ],
      "correct": 1
    },
    "minutes": 45,
    "concept": "Robot observations are expressed relative to frames. A position only has meaning when its reference frame is known.",
    "steps": [
      "Study the relevant section of NPTEL Introduction to Robotics (IIT Kanpur); write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Use NumPy to transform a 2D point between world, base and tool frames.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m1l3",
    "module": 0,
    "title": "Forward kinematics by building",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "Modern Robotics Chapter 4",
    "lab": "Plot the tip of a two-link arm over a grid of joint angles.",
    "quiz": {
      "question": "What does forward kinematics compute?",
      "options": [
        "Joint angles from camera pixels",
        "End-effector pose from joints",
        "Reward from an action"
      ],
      "correct": 1
    },
    "minutes": 45,
    "concept": "Forward kinematics maps joint configurations to end-effector pose. For a planar 2R arm, x=l1 cos(q1)+l2 cos(q1+q2).",
    "steps": [
      "Study the relevant section of NPTEL Introduction to Robotics (IIT Kanpur); write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Plot the tip of a two-link arm over a grid of joint angles.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m1l4",
    "module": 0,
    "title": "Control loops and reaching tasks",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "MuJoCo documentation",
    "lab": "Implement a proportional controller that moves a simulated joint toward a target.",
    "quiz": {
      "question": "What does a proportional controller use?",
      "options": [
        "Current tracking error",
        "Only the previous reward",
        "Only the camera resolution"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "A control loop measures error and repeatedly updates commands. Separate high-level learned actions from low-level motor control.",
    "steps": [
      "Study the relevant section of NPTEL Introduction to Robotics (IIT Kanpur); write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Implement a proportional controller that moves a simulated joint toward a target.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m2l1",
    "module": 1,
    "title": "Load a robot in MuJoCo",
    "primary": "MuJoCo documentation",
    "secondary": "MuJoCo Python",
    "lab": "Load a simple arm model, inspect joints and step the simulator.",
    "quiz": {
      "question": "What advances a physics simulation?",
      "options": [
        "A step call",
        "A Git commit",
        "A loss plot"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "A simulator integrates physics, constraints and actuators. Identify model, state, action, timestep and observation.",
    "steps": [
      "Study the relevant section of MuJoCo documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Load a simple arm model, inspect joints and step the simulator.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m2l2",
    "module": 1,
    "title": "Robot models, actuators and sensors",
    "primary": "MuJoCo documentation",
    "secondary": "Gymnasium documentation",
    "lab": "Modify joint limits, actuator gains and sensor readings in a MuJoCo model.",
    "quiz": {
      "question": "Why enforce joint limits?",
      "options": [
        "To improve plot colors",
        "To keep commands physically valid",
        "To remove all uncertainty"
      ],
      "correct": 1
    },
    "minutes": 45,
    "concept": "A model describes bodies, joints and actuators. Action scaling and joint limits determine what the policy can actually command.",
    "steps": [
      "Study the relevant section of MuJoCo documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Modify joint limits, actuator gains and sensor readings in a MuJoCo model.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m2l3",
    "module": 1,
    "title": "Create a Gymnasium reaching environment",
    "primary": "Gymnasium custom environments",
    "secondary": "MuJoCo Python",
    "lab": "Implement reset(), step(), observation, action, reward and termination.",
    "quiz": {
      "question": "What must step() return in modern Gymnasium?",
      "options": [
        "Only an image",
        "Observation, reward, terminated, truncated, info",
        "Only a policy"
      ],
      "correct": 1
    },
    "minutes": 45,
    "concept": "Gymnasium defines a standard interface for RL. Make observation/action spaces explicit and test their shapes.",
    "steps": [
      "Study the relevant section of Gymnasium custom environments; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Implement reset(), step(), observation, action, reward and termination.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m2l4",
    "module": 1,
    "title": "Debug simulation and evaluate baselines",
    "primary": "Gymnasium documentation",
    "secondary": "MuJoCo documentation",
    "lab": "Compare random, scripted and proportional policies on the same reaching task.",
    "quiz": {
      "question": "Why test a scripted baseline?",
      "options": [
        "To check that the task is solvable",
        "To replace all RL algorithms",
        "To avoid logging"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Before learning, establish a baseline and verify dynamics, reward direction, episode limits and reproducibility.",
    "steps": [
      "Study the relevant section of Gymnasium documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Compare random, scripted and proportional policies on the same reaching task.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m3l1",
    "module": 2,
    "title": "MDPs, rewards and robot policies",
    "primary": "Sutton and Barto RL book",
    "secondary": "Gymnasium documentation",
    "lab": "Define state, action, transition and reward for reaching.",
    "quiz": {
      "question": "What does a policy map?",
      "options": [
        "Observations to actions",
        "Motors to camera lenses",
        "Rewards to timestamps"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "An MDP formalizes sequential decisions. The return is the discounted sum of future rewards.",
    "steps": [
      "Study the relevant section of Sutton and Barto RL book; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Define state, action, transition and reward for reaching.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m3l2",
    "module": 2,
    "title": "Train a first policy with PPO",
    "primary": "Stable-Baselines3 PPO",
    "secondary": "Gymnasium documentation",
    "lab": "Train PPO on a simple continuous-control environment and plot learning curves.",
    "quiz": {
      "question": "What is PPO used to optimize?",
      "options": [
        "A robot's CAD geometry",
        "A policy",
        "A camera's focal length"
      ],
      "correct": 1
    },
    "minutes": 45,
    "concept": "PPO improves a stochastic policy while limiting overly large policy updates. Compare learned behavior to a baseline.",
    "steps": [
      "Study the relevant section of Stable-Baselines3 PPO; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Train PPO on a simple continuous-control environment and plot learning curves.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m3l3",
    "module": 2,
    "title": "Continuous control with SAC",
    "primary": "Stable-Baselines3 SAC",
    "secondary": "Spinning Up SAC",
    "lab": "Train SAC and compare sample efficiency and exploration with PPO.",
    "quiz": {
      "question": "What distinguishes SAC from basic on-policy PPO?",
      "options": [
        "It learns from replayed experience",
        "It requires no observations",
        "It only works with text"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "SAC is an off-policy actor-critic method using entropy regularization for exploration.",
    "steps": [
      "Study the relevant section of Stable-Baselines3 SAC; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Train SAC and compare sample efficiency and exploration with PPO.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m3l4",
    "module": 2,
    "title": "Reward shaping and failure analysis",
    "primary": "Sutton and Barto RL book",
    "secondary": "Stable-Baselines3 guide",
    "lab": "Test sparse versus dense reaching rewards; log reward hacking cases.",
    "quiz": {
      "question": "Which metric best validates a reaching task?",
      "options": [
        "Only average episode reward",
        "Task success rate on held-out trials",
        "Number of Python files"
      ],
      "correct": 1
    },
    "minutes": 45,
    "concept": "A poorly designed reward can encourage shortcuts. Track success rate separately from training reward.",
    "steps": [
      "Study the relevant section of Sutton and Barto RL book; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Test sparse versus dense reaching rewards; log reward hacking cases.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m3l5",
    "module": 2,
    "title": "Observation design and domain randomization",
    "primary": "Gymnasium documentation",
    "secondary": "MuJoCo documentation",
    "lab": "Vary masses, camera noise and target positions; evaluate generalization.",
    "quiz": {
      "question": "What is the goal of domain randomization?",
      "options": [
        "Make training screenshots colorful",
        "Improve robustness to variations",
        "Remove the need for testing"
      ],
      "correct": 1
    },
    "minutes": 45,
    "concept": "Policies can overfit a fixed simulator. Randomizing plausible conditions helps expose robustness gaps.",
    "steps": [
      "Study the relevant section of Gymnasium documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Vary masses, camera noise and target positions; evaluate generalization.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m4l1",
    "module": 3,
    "title": "Camera images and calibration basics",
    "primary": "OpenCV camera calibration",
    "secondary": "NPTEL Introduction to Robotics (IIT Madras)",
    "lab": "Capture images, inspect coordinate conventions and draw camera axes.",
    "quiz": {
      "question": "What do camera intrinsics describe?",
      "options": [
        "Focal length and principal point",
        "Robot motor torque",
        "RL discount factor"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Image coordinates are not world coordinates. Camera intrinsics and extrinsics connect pixels, rays and robot frames.",
    "steps": [
      "Study the relevant section of OpenCV camera calibration; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Capture images, inspect coordinate conventions and draw camera axes.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m4l2",
    "module": 3,
    "title": "Object detection and segmentation",
    "primary": "OpenCV tutorials",
    "secondary": "PyTorch tutorials",
    "lab": "Use OpenCV to locate a colored object and report its image centroid.",
    "quiz": {
      "question": "What is a segmentation mask?",
      "options": [
        "A per-pixel object label",
        "A motor command",
        "A trajectory cost"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "A perception pipeline extracts task-relevant signals from raw images. Evaluate failure under lighting and occlusion.",
    "steps": [
      "Study the relevant section of OpenCV tutorials; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Use OpenCV to locate a colored object and report its image centroid.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m4l3",
    "module": 3,
    "title": "Depth, pose and coordinate conversion",
    "primary": "OpenCV tutorials",
    "secondary": "Modern Robotics Chapter 3",
    "lab": "Back-project a depth pixel into 3D and transform it to a robot frame.",
    "quiz": {
      "question": "What additional measurement helps recover 3D from a pixel?",
      "options": [
        "Depth",
        "Episode reward",
        "Batch size"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Depth and camera calibration let you estimate 3D object locations. Pose errors propagate into grasp errors.",
    "steps": [
      "Study the relevant section of OpenCV tutorials; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Back-project a depth pixel into 3D and transform it to a robot frame.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m4l4",
    "module": 3,
    "title": "Perception-driven reaching",
    "primary": "OpenCV tutorials",
    "secondary": "MuJoCo Python",
    "lab": "Build a simulated loop: detect target, estimate pose, command a reach.",
    "quiz": {
      "question": "Why update observations during motion?",
      "options": [
        "To correct for changing state and errors",
        "To avoid using sensors",
        "To eliminate all delays"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Closed-loop perception refreshes target estimates as the robot moves. Compare open-loop and feedback control.",
    "steps": [
      "Study the relevant section of OpenCV tutorials; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Build a simulated loop: detect target, estimate pose, command a reach.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m5l1",
    "module": 4,
    "title": "Inverse kinematics for reaching",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "Modern Robotics Chapter 6",
    "lab": "Solve a planar 2R inverse-kinematics problem and test reachable targets.",
    "quiz": {
      "question": "What does inverse kinematics compute?",
      "options": [
        "Joints for a desired end-effector pose",
        "Camera pixels from RGB",
        "Reward discount"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Inverse kinematics finds joint configurations that realize a target pose. Solutions can be multiple or unreachable.",
    "steps": [
      "Study the relevant section of NPTEL Introduction to Robotics (IIT Kanpur); write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Solve a planar 2R inverse-kinematics problem and test reachable targets.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m5l2",
    "module": 4,
    "title": "Motion planning and collision checks",
    "primary": "MoveIt 2 tutorials",
    "secondary": "MuJoCo documentation",
    "lab": "Interpolate a joint-space path and reject collisions in simulation.",
    "quiz": {
      "question": "What is missing from a target joint configuration?",
      "options": [
        "A collision-free path to it",
        "A neural network name",
        "A training dataset license"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "A target pose is not a safe trajectory. Planning considers obstacles, joint limits and feasibility.",
    "steps": [
      "Study the relevant section of MoveIt 2 tutorials; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Interpolate a joint-space path and reject collisions in simulation.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m5l3",
    "module": 4,
    "title": "Grasping and pick-and-place",
    "primary": "LeRobot documentation",
    "secondary": "MuJoCo documentation",
    "lab": "Build a pick-lift-place sequence with gripper open/close actions.",
    "quiz": {
      "question": "Which step verifies the object was actually picked?",
      "options": [
        "Checking lift success",
        "Only logging action count",
        "Increasing camera exposure"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Grasping requires perception, approach pose, contact, grip and verification. Measure success across target placements.",
    "steps": [
      "Study the relevant section of LeRobot documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Build a pick-lift-place sequence with gripper open/close actions.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m5l4",
    "module": 4,
    "title": "Closed-loop autonomous manipulation",
    "primary": "MoveIt 2 tutorials",
    "secondary": "LeRobot documentation",
    "lab": "Add recovery when an object moves or a grasp fails.",
    "quiz": {
      "question": "What should a robot do after a failed grasp?",
      "options": [
        "Detect failure and retry or replan",
        "Assume success",
        "Disable sensors"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Robust autonomy senses, acts, checks results and replans. Compare fixed scripts with feedback-driven behavior.",
    "steps": [
      "Study the relevant section of MoveIt 2 tutorials; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Add recovery when an object moves or a grasp fails.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m6l1",
    "module": 5,
    "title": "Collect robot demonstrations",
    "primary": "LeRobot documentation",
    "secondary": "LeRobot datasets",
    "lab": "Record observations, actions and timestamps for a scripted reaching policy.",
    "quiz": {
      "question": "What is the supervised target in behavior cloning?",
      "options": [
        "Demonstrated action",
        "Robot serial number",
        "Camera frame rate alone"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Imitation learning learns behavior from expert examples. Dataset consistency and action timing matter.",
    "steps": [
      "Study the relevant section of LeRobot documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Record observations, actions and timestamps for a scripted reaching policy.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m6l2",
    "module": 5,
    "title": "Behavior cloning baseline",
    "primary": "PyTorch tutorials",
    "secondary": "LeRobot documentation",
    "lab": "Train a small neural policy to predict expert actions from observations.",
    "quiz": {
      "question": "Why can behavior cloning fail during rollout?",
      "options": [
        "Compounding distribution shift",
        "Because actions have no units",
        "Because robots cannot use neural nets"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Behavior cloning minimizes prediction error on demonstrations, but small errors can compound during rollout.",
    "steps": [
      "Study the relevant section of PyTorch tutorials; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Train a small neural policy to predict expert actions from observations.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m6l3",
    "module": 5,
    "title": "Dataset quality and evaluation",
    "primary": "LeRobot datasets",
    "secondary": "LeRobot documentation",
    "lab": "Split demonstrations by episode and evaluate on unseen initial states.",
    "quiz": {
      "question": "What is a better evaluation split?",
      "options": [
        "By independent episode",
        "Random frames from same episode only",
        "Only training frames"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Train/test leakage and narrow demonstrations can exaggerate performance. Report task success and failure cases.",
    "steps": [
      "Study the relevant section of LeRobot datasets; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Split demonstrations by episode and evaluate on unseen initial states.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m6l4",
    "module": 5,
    "title": "LeRobot policy training workflow",
    "primary": "LeRobot documentation",
    "secondary": "LeRobot source",
    "lab": "Inspect a LeRobot dataset, configure training and evaluate a policy in simulation.",
    "quiz": {
      "question": "What must match between dataset and policy?",
      "options": [
        "Observation and action schemas",
        "Website theme",
        "Git branch name"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "LeRobot provides dataset and policy tooling. Match observation keys, action shapes and normalization.",
    "steps": [
      "Study the relevant section of LeRobot documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Inspect a LeRobot dataset, configure training and evaluate a policy in simulation.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m7l1",
    "module": 6,
    "title": "Vision-language-action model anatomy",
    "primary": "SmolVLA",
    "secondary": "LeRobot documentation",
    "lab": "Trace image, language instruction and proprioception through a VLA policy.",
    "quiz": {
      "question": "What does VLA stand for?",
      "options": [
        "Vision-language-action",
        "Velocity-linear-acceleration",
        "Visual-local-array"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "A VLA model conditions action predictions on visual context and text instructions; output action conventions must match the robot.",
    "steps": [
      "Study the relevant section of SmolVLA; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Trace image, language instruction and proprioception through a VLA policy.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m7l2",
    "module": 6,
    "title": "Run and inspect SmolVLA",
    "primary": "SmolVLA",
    "secondary": "LeRobot documentation",
    "lab": "Inspect model inputs, outputs and normalization on a sample dataset.",
    "quiz": {
      "question": "What is a critical deployment compatibility check?",
      "options": [
        "Action dimensions and scaling",
        "CSS font family",
        "Markdown heading count"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Foundation policies still require compatible camera views, state fields, action dimensions and execution rates.",
    "steps": [
      "Study the relevant section of SmolVLA; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Inspect model inputs, outputs and normalization on a sample dataset.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m7l3",
    "module": 6,
    "title": "Adapt and evaluate a VLA policy",
    "primary": "SmolVLA",
    "secondary": "LeRobot datasets",
    "lab": "Plan a small fine-tuning experiment and compare held-out task success.",
    "quiz": {
      "question": "Which outcome matters more than training loss alone?",
      "options": [
        "Held-out task success",
        "Number of checkpoints",
        "GPU brand"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "A good adaptation study controls dataset quality, evaluation episodes and compute budget. Compare against behavior cloning.",
    "steps": [
      "Study the relevant section of SmolVLA; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Plan a small fine-tuning experiment and compare held-out task success.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m8l1",
    "module": 7,
    "title": "SO-101 setup and safety",
    "primary": "SO-101 hardware",
    "secondary": "LeRobot documentation",
    "lab": "Write a setup checklist covering calibration, workspace limits and emergency stop.",
    "quiz": {
      "question": "What should happen before autonomous execution?",
      "options": [
        "Verify calibration and safe stop",
        "Increase speed to maximum",
        "Disable logging"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Real robots introduce physical hazards, latency and calibration errors. Start at low speeds with an unobstructed workspace.",
    "steps": [
      "Study the relevant section of SO-101 hardware; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Write a setup checklist covering calibration, workspace limits and emergency stop.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m8l2",
    "module": 7,
    "title": "Deploy a learned manipulation policy",
    "primary": "LeRobot documentation",
    "secondary": "SO-101 hardware",
    "lab": "Connect observations to a tested policy and send bounded actions to the arm.",
    "quiz": {
      "question": "Why bound predicted actions?",
      "options": [
        "To prevent unsafe commands",
        "To improve website SEO",
        "To remove sensor noise"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Sim-to-real deployment requires matching units, cameras, timing and action limits. Start with supervised low-risk tests.",
    "steps": [
      "Study the relevant section of LeRobot documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Connect observations to a tested policy and send bounded actions to the arm.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  },
  {
    "id": "m8l3",
    "module": 7,
    "title": "Capstone evaluation and demonstration",
    "primary": "LeRobot documentation",
    "secondary": "SO-101 hardware",
    "lab": "Run repeated pick-and-place trials; publish success rate, failure analysis and a demo.",
    "quiz": {
      "question": "What makes a capstone result credible?",
      "options": [
        "Repeated trials and transparent metrics",
        "One successful video only",
        "No failure logs"
      ],
      "correct": 0
    },
    "minutes": 45,
    "concept": "Evaluate reliability over multiple trials and document reproducible setup, dataset provenance and limitations.",
    "steps": [
      "Study the relevant section of LeRobot documentation; write down the observation, action and expected outcome.",
      "Work through one concrete example and identify the inputs, outputs and units.",
      "Implement the lab: Run repeated pick-and-place trials; publish success rate, failure analysis and a demo.",
      "Test at least two cases, record results and explain one failure mode."
    ]
  }
];
