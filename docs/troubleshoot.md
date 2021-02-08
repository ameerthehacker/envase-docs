---
id: troubleshoot
title: Troubleshoot
sidebar_label: Troubleshoot
---

## Docker Connection Error

![connection-error](/img/troubleshooting/connection-error.png)

* You might have not started Docker server, read Docker [troubleshooting guide](https://docs.docker.com/config/daemon/) to fix this.
* You might have Docker running as **root user**, in this case you need to either run **Envase as also root user** or [run Docker as non root user](https://docs.docker.com/engine/install/linux-postinstall/).
* If you have Docker running in a **differnt port or with authentication** you can use the **Preferences** button to update those configuration and you should be able to start using Envase.