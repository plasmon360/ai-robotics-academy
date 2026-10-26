// Free learning references and 36-week build-first schedule.
const SOURCES={
  "NPTEL Robotics (IIT Kharagpur)": "https://nptel.ac.in/courses/112105249",
  "NPTEL Introduction to Robotics (IIT Kanpur)": "https://nptel.ac.in/courses/112104298",
  "NPTEL Introduction to Robotics (IIT Madras)": "https://nptel.ac.in/courses/107106090",
  "Modern Robotics Chapter 3": "https://modernrobotics.northwestern.edu/chapters/chapter3/",
  "Modern Robotics Chapter 4": "https://modernrobotics.northwestern.edu/chapters/chapter4/",
  "Modern Robotics Chapter 6": "https://modernrobotics.northwestern.edu/chapters/chapter6/",
  "Gymnasium documentation": "https://gymnasium.farama.org/",
  "Gymnasium custom environments": "https://gymnasium.farama.org/tutorials/gymnasium_basics/environment_creation/",
  "MuJoCo documentation": "https://mujoco.readthedocs.io/en/stable/overview.html",
  "MuJoCo Python": "https://mujoco.readthedocs.io/en/stable/python.html",
  "Sutton and Barto RL book": "http://incompleteideas.net/book/the-book-2nd.html",
  "Stable-Baselines3 PPO": "https://stable-baselines3.readthedocs.io/en/master/modules/ppo.html",
  "Stable-Baselines3 SAC": "https://stable-baselines3.readthedocs.io/en/master/modules/sac.html",
  "Stable-Baselines3 guide": "https://stable-baselines3.readthedocs.io/en/master/guide/rl_tips.html",
  "Spinning Up SAC": "https://spinningup.openai.com/en/latest/algorithms/sac.html",
  "OpenCV camera calibration": "https://docs.opencv.org/4.x/dc/dbb/tutorial_py_calibration.html",
  "OpenCV tutorials": "https://docs.opencv.org/4.x/d6/d00/tutorial_py_root.html",
  "PyTorch tutorials": "https://docs.pytorch.org/tutorials/",
  "MoveIt 2 tutorials": "https://moveit.picknik.ai/main/doc/tutorials/tutorials.html",
  "LeRobot documentation": "https://huggingface.co/docs/lerobot/index",
  "LeRobot datasets": "https://huggingface.co/datasets?other=LeRobot",
  "LeRobot source": "https://github.com/huggingface/lerobot",
  "SmolVLA": "https://huggingface.co/lerobot/smolvla_base",
  "SO-101 hardware": "https://github.com/TheRobotStudio/SO-ARM100"
};
const COURSE=[
  {
    "week": 1,
    "phase": "Robotics Essentials",
    "title": "Robot joints, state, actions and degrees of freedom",
    "lessonId": "m1l1",
    "primary": "NPTEL Robotics (IIT Kharagpur)",
    "secondary": "Gymnasium documentation",
    "deliverable": "Build a minimal 2-joint arm model and label observations versus actions.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Robot joints, state, actions and degrees of freedom. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Build a minimal 2-joint arm model and label observations versus actions."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 2,
    "phase": "Robotics Essentials",
    "title": "Coordinate frames without the heavy math",
    "lessonId": "m1l2",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "Modern Robotics Chapter 3",
    "deliverable": "Use NumPy to transform a 2D point between world, base and tool frames.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Coordinate frames without the heavy math. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Use NumPy to transform a 2D point between world, base and tool frames."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 3,
    "phase": "Robotics Essentials",
    "title": "Forward kinematics by building",
    "lessonId": "m1l3",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "Modern Robotics Chapter 4",
    "deliverable": "Plot the tip of a two-link arm over a grid of joint angles.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Forward kinematics by building. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Plot the tip of a two-link arm over a grid of joint angles."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 4,
    "phase": "Robotics Essentials",
    "title": "Control loops and reaching tasks",
    "lessonId": "m1l4",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "MuJoCo documentation",
    "deliverable": "Implement a proportional controller that moves a simulated joint toward a target.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Control loops and reaching tasks. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Implement a proportional controller that moves a simulated joint toward a target."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 5,
    "phase": "Robot Simulation",
    "title": "Load a robot in MuJoCo",
    "lessonId": "m2l1",
    "primary": "MuJoCo documentation",
    "secondary": "MuJoCo Python",
    "deliverable": "Load a simple arm model, inspect joints and step the simulator.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Load a robot in MuJoCo. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Load a simple arm model, inspect joints and step the simulator."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 6,
    "phase": "Robot Simulation",
    "title": "Robot models, actuators and sensors",
    "lessonId": "m2l2",
    "primary": "MuJoCo documentation",
    "secondary": "Gymnasium documentation",
    "deliverable": "Modify joint limits, actuator gains and sensor readings in a MuJoCo model.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Robot models, actuators and sensors. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Modify joint limits, actuator gains and sensor readings in a MuJoCo model."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 7,
    "phase": "Robot Simulation",
    "title": "Create a Gymnasium reaching environment",
    "lessonId": "m2l3",
    "primary": "Gymnasium custom environments",
    "secondary": "MuJoCo Python",
    "deliverable": "Implement reset(), step(), observation, action, reward and termination.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Create a Gymnasium reaching environment. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Implement reset(), step(), observation, action, reward and termination."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 8,
    "phase": "Robot Simulation",
    "title": "Debug simulation and evaluate baselines",
    "lessonId": "m2l4",
    "primary": "Gymnasium documentation",
    "secondary": "MuJoCo documentation",
    "deliverable": "Compare random, scripted and proportional policies on the same reaching task.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Debug simulation and evaluate baselines. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Compare random, scripted and proportional policies on the same reaching task."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 9,
    "phase": "Reinforcement Learning for Robots",
    "title": "MDPs, rewards and robot policies",
    "lessonId": "m3l1",
    "primary": "Sutton and Barto RL book",
    "secondary": "Gymnasium documentation",
    "deliverable": "Define state, action, transition and reward for reaching.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study MDPs, rewards and robot policies. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Define state, action, transition and reward for reaching."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 10,
    "phase": "Reinforcement Learning for Robots",
    "title": "MDPs, rewards and robot policies",
    "lessonId": "m3l1",
    "primary": "Sutton and Barto RL book",
    "secondary": "Gymnasium documentation",
    "deliverable": "Define state, action, transition and reward for reaching.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study MDPs, rewards and robot policies. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Define state, action, transition and reward for reaching."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 11,
    "phase": "Reinforcement Learning for Robots",
    "title": "Train a first policy with PPO",
    "lessonId": "m3l2",
    "primary": "Stable-Baselines3 PPO",
    "secondary": "Gymnasium documentation",
    "deliverable": "Train PPO on a simple continuous-control environment and plot learning curves.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Train a first policy with PPO. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Train PPO on a simple continuous-control environment and plot learning curves."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 12,
    "phase": "Reinforcement Learning for Robots",
    "title": "Continuous control with SAC",
    "lessonId": "m3l3",
    "primary": "Stable-Baselines3 SAC",
    "secondary": "Spinning Up SAC",
    "deliverable": "Train SAC and compare sample efficiency and exploration with PPO.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Continuous control with SAC. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Train SAC and compare sample efficiency and exploration with PPO."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 13,
    "phase": "Reinforcement Learning for Robots",
    "title": "Reward shaping and failure analysis",
    "lessonId": "m3l4",
    "primary": "Sutton and Barto RL book",
    "secondary": "Stable-Baselines3 guide",
    "deliverable": "Test sparse versus dense reaching rewards; log reward hacking cases.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Reward shaping and failure analysis. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Test sparse versus dense reaching rewards; log reward hacking cases."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 14,
    "phase": "Reinforcement Learning for Robots",
    "title": "Observation design and domain randomization",
    "lessonId": "m3l4",
    "primary": "Gymnasium documentation",
    "secondary": "MuJoCo documentation",
    "deliverable": "Vary masses, camera noise and target positions; evaluate generalization.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Observation design and domain randomization. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Vary masses, camera noise and target positions; evaluate generalization."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 15,
    "phase": "Robot Perception",
    "title": "Camera images and calibration basics",
    "lessonId": "m4l1",
    "primary": "OpenCV camera calibration",
    "secondary": "NPTEL Introduction to Robotics (IIT Madras)",
    "deliverable": "Capture images, inspect coordinate conventions and draw camera axes.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Camera images and calibration basics. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Capture images, inspect coordinate conventions and draw camera axes."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 16,
    "phase": "Robot Perception",
    "title": "Object detection and segmentation",
    "lessonId": "m4l2",
    "primary": "OpenCV tutorials",
    "secondary": "PyTorch tutorials",
    "deliverable": "Use OpenCV to locate a colored object and report its image centroid.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Object detection and segmentation. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Use OpenCV to locate a colored object and report its image centroid."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 17,
    "phase": "Robot Perception",
    "title": "Depth, pose and coordinate conversion",
    "lessonId": "m4l3",
    "primary": "OpenCV tutorials",
    "secondary": "Modern Robotics Chapter 3",
    "deliverable": "Back-project a depth pixel into 3D and transform it to a robot frame.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Depth, pose and coordinate conversion. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Back-project a depth pixel into 3D and transform it to a robot frame."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 18,
    "phase": "Robot Perception",
    "title": "Perception-driven reaching",
    "lessonId": "m4l4",
    "primary": "OpenCV tutorials",
    "secondary": "MuJoCo Python",
    "deliverable": "Build a simulated loop: detect target, estimate pose, command a reach.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Perception-driven reaching. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Build a simulated loop: detect target, estimate pose, command a reach."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 19,
    "phase": "Autonomous Manipulation",
    "title": "Inverse kinematics for reaching",
    "lessonId": "m5l1",
    "primary": "NPTEL Introduction to Robotics (IIT Kanpur)",
    "secondary": "Modern Robotics Chapter 6",
    "deliverable": "Solve a planar 2R inverse-kinematics problem and test reachable targets.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Inverse kinematics for reaching. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Solve a planar 2R inverse-kinematics problem and test reachable targets."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 20,
    "phase": "Autonomous Manipulation",
    "title": "Motion planning and collision checks",
    "lessonId": "m5l2",
    "primary": "MoveIt 2 tutorials",
    "secondary": "MuJoCo documentation",
    "deliverable": "Interpolate a joint-space path and reject collisions in simulation.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Motion planning and collision checks. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Interpolate a joint-space path and reject collisions in simulation."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 21,
    "phase": "Autonomous Manipulation",
    "title": "Grasping and pick-and-place",
    "lessonId": "m5l3",
    "primary": "LeRobot documentation",
    "secondary": "MuJoCo documentation",
    "deliverable": "Build a pick-lift-place sequence with gripper open/close actions.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Grasping and pick-and-place. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Build a pick-lift-place sequence with gripper open/close actions."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 22,
    "phase": "Autonomous Manipulation",
    "title": "Closed-loop autonomous manipulation",
    "lessonId": "m5l4",
    "primary": "MoveIt 2 tutorials",
    "secondary": "LeRobot documentation",
    "deliverable": "Add recovery when an object moves or a grasp fails.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Closed-loop autonomous manipulation. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Add recovery when an object moves or a grasp fails."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 23,
    "phase": "Imitation Learning and LeRobot",
    "title": "Collect robot demonstrations",
    "lessonId": "m6l1",
    "primary": "LeRobot documentation",
    "secondary": "LeRobot datasets",
    "deliverable": "Record observations, actions and timestamps for a scripted reaching policy.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Collect robot demonstrations. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Record observations, actions and timestamps for a scripted reaching policy."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 24,
    "phase": "Imitation Learning and LeRobot",
    "title": "Collect robot demonstrations",
    "lessonId": "m6l1",
    "primary": "LeRobot documentation",
    "secondary": "LeRobot datasets",
    "deliverable": "Record observations, actions and timestamps for a scripted reaching policy.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Collect robot demonstrations. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Record observations, actions and timestamps for a scripted reaching policy."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 25,
    "phase": "Imitation Learning and LeRobot",
    "title": "Behavior cloning baseline",
    "lessonId": "m6l2",
    "primary": "PyTorch tutorials",
    "secondary": "LeRobot documentation",
    "deliverable": "Train a small neural policy to predict expert actions from observations.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Behavior cloning baseline. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Train a small neural policy to predict expert actions from observations."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 26,
    "phase": "Imitation Learning and LeRobot",
    "title": "Dataset quality and evaluation",
    "lessonId": "m6l3",
    "primary": "LeRobot datasets",
    "secondary": "LeRobot documentation",
    "deliverable": "Split demonstrations by episode and evaluate on unseen initial states.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Dataset quality and evaluation. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Split demonstrations by episode and evaluate on unseen initial states."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 27,
    "phase": "Imitation Learning and LeRobot",
    "title": "LeRobot policy training workflow",
    "lessonId": "m6l4",
    "primary": "LeRobot documentation",
    "secondary": "LeRobot source",
    "deliverable": "Inspect a LeRobot dataset, configure training and evaluate a policy in simulation.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study LeRobot policy training workflow. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Inspect a LeRobot dataset, configure training and evaluate a policy in simulation."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 28,
    "phase": "Foundation Models and VLA",
    "title": "Vision-language-action model anatomy",
    "lessonId": "m7l1",
    "primary": "SmolVLA",
    "secondary": "LeRobot documentation",
    "deliverable": "Trace image, language instruction and proprioception through a VLA policy.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Vision-language-action model anatomy. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Trace image, language instruction and proprioception through a VLA policy."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 29,
    "phase": "Foundation Models and VLA",
    "title": "Vision-language-action model anatomy",
    "lessonId": "m7l1",
    "primary": "SmolVLA",
    "secondary": "LeRobot documentation",
    "deliverable": "Trace image, language instruction and proprioception through a VLA policy.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Vision-language-action model anatomy. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Trace image, language instruction and proprioception through a VLA policy."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 30,
    "phase": "Foundation Models and VLA",
    "title": "Run and inspect SmolVLA",
    "lessonId": "m7l2",
    "primary": "SmolVLA",
    "secondary": "LeRobot documentation",
    "deliverable": "Inspect model inputs, outputs and normalization on a sample dataset.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Run and inspect SmolVLA. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Inspect model inputs, outputs and normalization on a sample dataset."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 31,
    "phase": "Foundation Models and VLA",
    "title": "Run and inspect SmolVLA",
    "lessonId": "m7l2",
    "primary": "SmolVLA",
    "secondary": "LeRobot documentation",
    "deliverable": "Inspect model inputs, outputs and normalization on a sample dataset.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Run and inspect SmolVLA. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Inspect model inputs, outputs and normalization on a sample dataset."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 32,
    "phase": "Foundation Models and VLA",
    "title": "Adapt and evaluate a VLA policy",
    "lessonId": "m7l3",
    "primary": "SmolVLA",
    "secondary": "LeRobot datasets",
    "deliverable": "Plan a small fine-tuning experiment and compare held-out task success.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Adapt and evaluate a VLA policy. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Plan a small fine-tuning experiment and compare held-out task success."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 33,
    "phase": "SO-101 Real-Robot Capstone",
    "title": "SO-101 setup and safety",
    "lessonId": "m8l1",
    "primary": "SO-101 hardware",
    "secondary": "LeRobot documentation",
    "deliverable": "Write a setup checklist covering calibration, workspace limits and emergency stop.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study SO-101 setup and safety. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Write a setup checklist covering calibration, workspace limits and emergency stop."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 34,
    "phase": "SO-101 Real-Robot Capstone",
    "title": "SO-101 setup and safety",
    "lessonId": "m8l1",
    "primary": "SO-101 hardware",
    "secondary": "LeRobot documentation",
    "deliverable": "Write a setup checklist covering calibration, workspace limits and emergency stop.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study SO-101 setup and safety. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Write a setup checklist covering calibration, workspace limits and emergency stop."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 35,
    "phase": "SO-101 Real-Robot Capstone",
    "title": "Deploy a learned manipulation policy",
    "lessonId": "m8l2",
    "primary": "LeRobot documentation",
    "secondary": "SO-101 hardware",
    "deliverable": "Connect observations to a tested policy and send bounded actions to the arm.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Deploy a learned manipulation policy. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Connect observations to a tested policy and send bounded actions to the arm."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  },
  {
    "week": 36,
    "phase": "SO-101 Real-Robot Capstone",
    "title": "Capstone evaluation and demonstration",
    "lessonId": "m8l3",
    "primary": "LeRobot documentation",
    "secondary": "SO-101 hardware",
    "deliverable": "Run repeated pick-and-place trials; publish success rate, failure analysis and a demo.",
    "days": [
      {
        "title": "Learn",
        "hours": 1.5,
        "task": "Study Capstone evaluation and demonstration. Write a short explanation and note the relevant units."
      },
      {
        "title": "Worked example",
        "hours": 1.5,
        "task": "Reproduce one worked example and verify the result."
      },
      {
        "title": "Python practice",
        "hours": 2,
        "task": "Run repeated pick-and-place trials; publish success rate, failure analysis and a demo."
      },
      {
        "title": "Test and improve",
        "hours": 2,
        "task": "Run multiple scenarios, compare a baseline and document one failure."
      },
      {
        "title": "Review and commit",
        "hours": 1,
        "task": "Record observations, save results and commit code and notes."
      }
    ]
  }
];
