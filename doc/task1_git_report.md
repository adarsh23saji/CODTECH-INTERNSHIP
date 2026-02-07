# Task 1: Version Control with Git - Conflict Resolution Report

## Overview
This document describes the steps taken to demonstrate merge conflict resolution in Git.

## Steps
1.  **Repository Setup**: Initialized a Git repository and created `app.js` with basic functionality.
2.  **Feature Branch**: Created a branch named `feature-update`.
3.  **Changes in Feature Branch**: Modified `app.js` to enable "Advanced functionality".
4.  **Changes in Main Branch**: Switched back to `main` and modified `app.js` to enable "Secure functionality" on the same line.
5.  **Merge Conflict**: Attempted to merge `feature-update` into `main`, which resulted in a conflict due to concurrent modifications of the same line.
6.  **Resolution**: 
    -   Opened `app.js` and identified the conflicting blocks.
    -   Combined the changes to include both "Secure" and "Advanced" functionality.
    -   Saved the file.
7.  **Commit**: Added the resolved file and committed the merge.

## Outcome
The repository now contains a merged history with both features integrated.
