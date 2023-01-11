export const BASE_DIR = "./.comet";
export const MAIN_FILE = `${BASE_DIR}/token.json`;
export const DATA_FILE = `${BASE_DIR}/data.json`;
export const TRELLO_ADD_BRANCHES = [
  "integration",
  "internal", 
  "staging", 
  "master-ready", 
  "tracking-internal", 
  "tracking-integration", 
  "tracking-qc", 
  "enq-internal", 
  "enq-integration", 
  "enq-qc"
];
export const PR_BRANCHES = [...TRELLO_ADD_BRANCHES, "master", "qc"];
export const BITBUCKET_BASE = "https://api.bitbucket.org/2.0/";
export const TRELLO_BASE = "https://api.trello.com/1/";
export const WORKSPACE = "gocomet";
export const REPO_SLUGS = [
  "gocomet-app",
  "frontend-service",
  "gocomet-sidecar",
  "gocomet-dashboard",
  "gocomet-sys",
  "gocomet-website",
  "kubernetes-deployment",
  "docker-service",
  "gocomet-jenkins",
  "engagement-app",
];
export const MAIN_FILL = {
  bitbucket: {
    username: "",
    password: "",
    workspace: "",
    repo_slug: "",
  },
  trello: {
    key: "",
    token: "",
  },
  user: {
    name_slug: "",
  },
};

export const BRANCH_FILL = {
  trello_card: "",
  branch_name: "",
  pull_requests: {},
};
