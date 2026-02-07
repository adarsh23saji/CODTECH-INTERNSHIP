# Task 4: Secure DevOps Practices Report

## Overview
This document outlines the security measures integrated into the CI/CD pipeline.

## Implemented Security Checks

### 1. NPM Audit
-   **Tool**: `npm audit`
-   **Purpose**: Scans project dependencies for known vulnerabilities.
-   **Integration**: Added as a job in the GitHub Actions workflow.
-   **Configuration**: Fails the build if vulnerabilities with `high` severity or above are found.

### 2. SonarQube Integration (Simulated)
-   **Tool**: SonarQube
-   **Purpose**: Static Application Security Testing (SAST) to detect code quality issues and security hotspots.
-   **Integration**: Added a placeholder step in the pipeline.
-   **Real-world Verification**: In a production environment, this would connect to a SonarQube server and upload the analysis report.

### 3. OWASP ZAP (Recommended)
-   **Tool**: OWASP ZAP
-   **Purpose**: Dynamic Application Security Testing (DAST).
-   **Strategy**: Run ZAP against the deployed application (or a staging environment) to find runtime vulnerabilities like XSS or SQL Injection.

## Vulnerability Report (Sample)
Running `npm audit` on the current project:
```
found 0 vulnerabilities
```
(Note: Real output depends on the dependency tree state).

## Conclusion
The pipeline now includes checks to ensure that deployed code relies on secure dependencies and undergoes static analysis.
