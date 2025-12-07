// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "tutorialSidebar": [
    "intro",
    {
      "type": "category",
      "label": "Month 1: Foundations",
      "items": [
        {
          "type": "category",
          "label": "Weeks 1-2: Introduction to Physical AI",
          "items": [
            "weeks-1-2-introduction-to-physical-ai/foundations-of-physical-ai-and-embodied-intelligence",
            "weeks-1-2-introduction-to-physical-ai/from-digital-ai-to-robots-that-understand-physical-laws",
            "weeks-1-2-introduction-to-physical-ai/overview-of-humanoid-robotics-landscape",
            "weeks-1-2-introduction-to-physical-ai/sensor-systems-lidar-cameras-imus-forcetorque-sensors"
          ]
        },
        {
          "type": "category",
          "label": "Weeks 3-4: ROS 2 Fundamentals",
          "items": [
            "weeks-3-5-ros-2-fundamentals/ros-2-architecture-and-core-concepts",
            "weeks-3-5-ros-2-fundamentals/nodes-topics-services-and-actions",
            "weeks-3-5-ros-2-fundamentals/building-ros-2-packages-with-python",
            "weeks-3-5-ros-2-fundamentals/launch-files-and-parameter-management"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Month 2: Simulation and AI",
      "items": [
        {
          "type": "category",
          "label": "Weeks 5-6: Robot Simulation with Gazebo",
          "items": [
            "weeks-6-7-robot-simulation-with-gazebo/gazebo-simulation-environment-setup",
            "weeks-6-7-robot-simulation-with-gazebo/urdf-and-sdf-robot-description-formats",
            "weeks-6-7-robot-simulation-with-gazebo/physics-simulation-and-sensor-simulation",
            "weeks-6-7-robot-simulation-with-gazebo/introduction-to-unity-for-robot-visualization"
          ]
        },
        {
          "type": "category",
          "label": "Weeks 7-8: NVIDIA Isaac Platform",
          "items": [
            "weeks-8-10-nvidia-isaac-platform/nvidia-isaac-sdk-and-isaac-sim",
            "weeks-8-10-nvidia-isaac-platform/ai-powered-perception-and-manipulation",
            "weeks-8-10-nvidia-isaac-platform/reinforcement-learning-for-robot-control",
            "weeks-8-10-nvidia-isaac-platform/sim-to-real-transfer-techniques"
          ]
        }
      ]
    },
    {
      "type": "category",
      "label": "Month 3: Advanced Robotics",
      "items": [
        {
          "type": "category",
          "label": "Weeks 9-10: Humanoid Robot Development",
          "items": [
            "weeks-11-12-humanoid-robot-development/humanoid-robot-kinematics-and-dynamics",
            "weeks-11-12-humanoid-robot-development/bipedal-locomotion-and-balance-control",
            "weeks-11-12-humanoid-robot-development/manipulation-and-grasping-with-humanoid-hands",
            "weeks-11-12-humanoid-robot-development/natural-human-robot-interaction-design"
          ]
        },
        {
          "type": "category",
          "label": "Weeks 11-12: Conversational Robotics",
          "items": [
            "week-13-conversational-robotics/integrating-gpt-models-for-conversational-ai-in-robots",
            "week-13-conversational-robotics/speech-recognition-and-natural-language-understanding",
            "week-13-conversational-robotics/multi-modal-interaction-speech-gesture-vision"
          ]
        }
      ]
    }
  ]
};

export default sidebars;
