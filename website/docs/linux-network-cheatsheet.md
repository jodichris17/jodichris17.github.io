---
title: Network Cheatsheet
---

Published on November 30, 2020

Networking Cheat Sheet
======================

Sniff Network Traffic from / to IP
----------------------------------

    tcpdump -n -i eth0 src SRC_IP  or dst DEST_IP

Create Routes
-------------

     sudo route add -net DESTINATION gateway GATEWAY
     sudo route add -net DESTINATION if INTERFACE

Show Routes
-----------

    netstat -rn

Trace Routes
------------

    tracerouts `<ADDRESS>`

Show Ports
----------

    sudo netstat -tulpn

iptables
========

Basics
------

* `iptables` organizes firewalls in *chains* (`INPUT`, `OUTPUT`, `FORWARD`)
* each chain contains a set of *rules*. A rule defines
  * a protocol type
  * a source address
  * a destination address
  * an interface
  * ...
* a *packet* either matches a rule or not
* if a rule is matched, the associated action is taken - this action is called a *target*. A target can be
  * `ACCEPT`
  * `DROP`
* rules are processed in the order of appearence within a chain
* each chain has a *default policy* that matches if no rule matches


Basic Commands
--------------

### List Rules

    iptables -n -L          # -n = disables DNS

use `--list-numbers` to show the numbers of rules in a chain.

### List Commands to configure a Chain

    iptables -S INPUT

shows all commands necessary to set up the `INPUT` chain

### Adding a route

````
iptables 
  -A INPUT        = append
  -I INPUT <pos>  = insert
      -j      target (e.g. ACCEPT, DROP...)
      -p      protocol, e.g. tcp
      -dport  destination port, e.g. 80
      -i      interface name
````

### Adding a default Policy

    iptables -P INPUT DROP

Adds a `DROP` policy to the `INPUT`chain


### Deleting a default Policy

Before you can delete a policy **there must be no more rules in the policy**. Afterwards, it's

    iptables -X INPUT


### Flushing current Rules

iptables rules are not persistent - therefore you can flush the rules with

    iptables -F

Remind that **policies are not flushed**


Debugging
---------

Althought there exist several logging mechanisms for iptables (see [Further Resources](#further_resources)) this will not work, unless you have the `ipt_LOG` module installed on your kernel.

Therefore this can be a workaround to see what's happening with your packets:

1. `watch` the `iptables -L` command with

    ```
    watch -n 0.1 sudo iptables -L -n -v
    ```

1. Ping some host - you'll now see the packet counter of the affected rules increasing


Further Resources
=================

Digital Ocean Tutorial on iptables
----------------------------------

* [How the iptables Firewall works (Digital Ocean)](https://www.digitalocean.com/community/tutorials/how-the-iptables-firewall-works)
* [How to set up a Firewall using iptables (Digital Ocean)](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-iptables-on-ubuntu-14-04)
* [iptables Essentials (Digital Ocean)](https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands)
* [How to list and delete iptables Firewall Rules (Digital Ocean)](https://www.digitalocean.com/community/tutorials/how-to-list-and-delete-iptables-firewall-rules)

iptables in general
-------------------

* [Logging Dropped Packages](http://www.thegeekstuff.com/2012/08/iptables-log-packets/?utm_source=feedburner)
* [iptables debugging with trace](http://backreference.org/2010/06/11/iptables-debugging/)
* [iptables flow diagram](http://inai.de/images/nf-packet-flow.png)
* [Question for good iptables tutorials on Stack Overflow](http://serverfault.com/questions/158772/can-you-recommend-a-good-intro-to-iptables)

Networking in general
---------------------

* [Introduction to Linux Routing](http://linux-ip.net/html/routing-intro.html)

