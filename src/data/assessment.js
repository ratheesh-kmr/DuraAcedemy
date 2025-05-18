export const assessment = {
  // Assessment 1: Artificial Intelligence & Machine Learning
  1: [
    {
      q: "What is the primary goal of supervised learning?",
      options: [
        "To discover hidden patterns in unlabeled data.",
        "To predict outputs based on labeled input data.",
        "To enable agents to learn in an environment by trial and error.",
      ],
      answer: 1, // Index of the correct option
      type: "multiple choice",
    },
    {
      q: "Explain the difference between a neural network and deep learning.",
      type: "short answer",
      answer:
        "A neural network is a computational model inspired by the human brain, consisting of interconnected nodes. Deep learning is a subfield of machine learning that uses neural networks with many layers (deep neural networks) to learn complex representations of data.",
    },
    {
      q: "Which of the following is a Generative AI technique?",
      options: ["Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)", "Variational Autoencoders (VAEs)"],
      answer: 2,
      type: "multiple choice",
    },
    {
        q: "What is Agentic AI?",
        options: [
          "AI that only uses pre-defined rules.",
          "AI that can perceive its environment and take actions to achieve goals.",
          "AI that is controlled by a central agent.",
        ],
        answer: 1,
        type: "multiple choice",
    },
    {
      q: "Describe the role of backpropagation in training neural networks.",
      type: "short answer",
      answer: "Backpropagation is an algorithm used to train neural networks. It calculates the gradient of the loss function with respect to the weights of the network and updates the weights in the opposite direction of the gradient to minimize the loss.",
    },
  ],

  // Assessment 2: Data Science & Business Analytics
  2: [
    {
      q: "Which type of data visualization is best for showing the distribution of a single variable?",
      options: ["Scatter plot", "Histogram", "Line chart"],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Explain the difference between correlation and causation.",
      type: "short answer",
      answer:
        "Correlation indicates a statistical relationship between two variables, but it does not imply that one variable causes the other. Causation means that one variable directly influences another.",
    },
    {
      q: "What is the purpose of feature scaling in machine learning?",
      options: [
        "To reduce the number of features.",
        "To normalize the range of independent variables.",
        "To improve the accuracy of predictions.",
      ],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Describe a scenario where regression analysis would be used.",
      type: "short answer",
      answer: "Regression analysis can be used to predict a continuous numerical output, such as predicting house prices based on features like size and location, or predicting sales based on advertising spending.",
    },
    {
      q: "What is the difference between descriptive and inferential statistics?",
      type: "short answer",
      answer: "Descriptive statistics summarize and describe the main features of a dataset, while inferential statistics use sample data to make inferences or predictions about a larger population.",
    },
  ],

  // Assessment 3: Full Stack Development Program
  3: [
    {
      q: "What is the purpose of a front-end framework like React?",
      options: [
        "To manage server-side logic.",
        "To build interactive user interfaces.",
        "To handle database operations.",
      ],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Explain the role of a database in a full-stack application.",
      type: "short answer",
      answer:
        "A database stores and manages the application's data, allowing for persistent storage, retrieval, and manipulation of information.  It provides the data that the backend processes and the frontend displays.",
    },
    {
      q: "Which HTTP method is typically used to create a new resource on a server?",
      options: ["GET", "POST", "PUT"],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Describe the concept of RESTful APIs.",
      type: "short answer",
      answer: "RESTful APIs are a way of designing web services that follow a set of architectural principles. They use standard HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources, are stateless, and use URLs to identify resources.",
    },
     {
      q: "What is the purpose of version control systems like Git?",
      options: [
        "To deploy applications.",
        "To track changes to code and collaborate with others.",
        "To design user interfaces.",
      ],
      answer: 1,
      type: "multiple choice",
    },
  ],

  // Assessment 4: Cloud Computing Architectures
  4: [
    {
      q: "What is the primary benefit of cloud computing?",
      options: [
        "Lower hardware costs",
        "On-demand access to scalable resources",
        "Increased physical security",
      ],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Explain the difference between IaaS, PaaS, and SaaS.",
      type: "short answer",
      answer:
        "IaaS (Infrastructure as a Service) provides virtualized computing resources over the internet. PaaS (Platform as a Service) provides a platform allowing customers to develop, run, and manage applications without dealing with the underlying infrastructure. SaaS (Software as a Service) provides software applications over the internet.",
    },
    {
      q: "Which cloud provider is known for its 'Elastic Compute Cloud' (EC2)?",
      options: ["Microsoft Azure", "Amazon Web Services (AWS)", "Google Cloud Platform (GCP)"],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Describe the concept of cloud scalability.",
      type: "short answer",
      answer: "Cloud scalability refers to the ability of a cloud computing system to handle increasing workloads by adding resources (scaling up) or reducing resources (scaling down) as needed. This allows applications to adapt to changing demands.",
    },
    {
      q: "What is a 'Virtual Private Cloud' (VPC)?",
      options: [
        "A private cloud hosted on-premises.",
        "A logically isolated section of a public cloud.",
        "A cloud service for virtualizing desktops.",
      ],
      answer: 1,
      type: "multiple choice"
    }
  ],

  // Assessment 15: Finance for Non-Finance Professionals
  15: [
    {
      q: "Which financial statement shows a company's revenues and expenses?",
      options: ["Balance Sheet", "Income Statement", "Cash Flow Statement"],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Explain the purpose of a balance sheet.",
      type: "short answer",
      answer:
        "A balance sheet provides a snapshot of a company's assets, liabilities, and equity at a specific point in time. It shows what a company owns and what it owes.",
    },
    {
      q: "What is depreciation?",
      options: [
        "An increase in an asset's value",
        "The allocation of the cost of an asset over its useful life",
        "A type of investment",
      ],
      answer: 1,
      type: "multiple choice",
    },
    {
      q: "Describe the concept of budgeting.",
      type: "short answer",
      answer: "Budgeting is the process of creating a plan for how money will be spent. It involves estimating revenues and expenses over a period of time and is used for financial planning and control.",
    },
    {
      q: "What is the difference between debt and equity financing?",
      options: [
        "Debt is a type of equity.",
        "Debt involves borrowing money that must be repaid, while equity involves raising capital by selling ownership in the company.",
        "Equity is a type of debt.",
      ],
      answer: 1,
      type: "multiple choice"
    }
  ],
};
