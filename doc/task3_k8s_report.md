# Task 3: Kubernetes Deployment Report

## Overview
This document describes the steps to deploy the Node.js application on a Kubernetes cluster.

## Files Created
-   `Dockerfile`: Defines the container image for the application.
-   `k8s/deployment.yaml`: Defines the Deployment resource with 3 replicas.
-   `k8s/service.yaml`: Defines the Service resource to expose the application.

## Deployment Steps
1.  **Build Docker Image**:
    ```bash
    docker build -t node-app:latest .
    ```

2.  **Apply Deployment**:
    ```bash
    kubectl apply -f k8s/deployment.yaml
    ```

3.  **Apply Service**:
    ```bash
    kubectl apply -f k8s/service.yaml
    ```

4.  **Verify**:
    ```bash
    kubectl get pods
    kubectl get services
    ```

## Configuration Details
-   **Replicas**: 3
-   **Image**: `node-app:latest`
-   **Service Type**: `LoadBalancer` (exposes port 80 -> container port 3000)
