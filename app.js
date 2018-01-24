setInterval(function() {
 console.log("Two different methods of applying this leaky bucket analogy are described in the literature. These give what
appear to be two different algorithms, both of which are referred to as the leaky bucket algorithm and generally without
reference to the other method. This has resulted in confusion about what the leaky bucket algorithm is and what its
properties are.
In one version of applying the analogy, the analogue of the bucket is a counter or variable, separate from the flow of traffic
or scheduling of events.
This counter is used only to check that the traffic or events conform to the limits: The
counter is incremented as each packet arrives at the point where the check is being made or an event occurs, which is
equivalent to the way water is added intermittently to the bucket. The counter is also decremented at a fixed rate,
equivalent to the way the water leaks out of the bucket. As a result, the value in the counter represents the level of the
water in the analogous bucket. If the counter remains below a specified limit value when a packet arrives or an event
occurs, i.e. the bucket does not overflow, that indicates its conformance to the bandwidth and burstiness limits or the
average and peak rate event limits. So in this version, the analogue of the water is carried by the packets or the events,
added to the bucket on their arriving or occurring, and then leaks away. This version is referred to here as the leaky bucket
as a meter.
In the second version, the analogue of the bucket is a queue in the flow of traffic.
[2] This queue is used to directly control
that flow: Packets are entered into the queue as they arrive, equivalent to the water being added to the bucket. These
packets are then removed from the queue (first come, first served), usually at a fixed rate, e.g. for onward transmission,
equivalent to water leaking from the bucket. As a result, the rate at which the queue is serviced directly controls the
onward transmission rate of the traffic. Thus it imposes conformance rather than checking it, and where the queue is
serviced at a fixed rate (and where the packets are all the same length), the resulting traffic stream is necessarily devoid of
burstiness or jitter. So in this version, the traffic itself is the analogue of the water passing through the bucket. It is not
clear how this version of applying the analogy might be used to check the rates of discrete events. This version is referred
to here as the leaky bucket as a queue.
The leaky bucket as a meter is exactly equivalent to (a mirror image of) the token bucket algorithm, i.e. the process of
adding water to the leaky bucket exactly mirrors that of removing tokens from the token bucket when a conforming packet
arrives, the process of leaking of water from the leaky bucket exactly mirrors that of regularly adding tokens to the token
bucket, and the test that the leaky bucket will not overflow is a mirror of the test that the token bucket contains enough
tokens and will not 'underflow'. Thus, given equivalent parameters, the two algorithms will see the same traffic as
conforming or nonconforming. The leaky bucket as a queue can be seen as a special case of the leaky bucket as a meter.
[6]
Overview
As a meter
1/24/2018 Leaky bucket - Wikipedia
https://en.wikipedia.org/wiki/Leaky_bucket 3/12
Jonathan S. Turner is credited
[7] with the original description of the leaky bucket algorithm and describes it as follows: “A
counter associated with each user transmitting on a connection is incremented whenever the user sends a packet and is
decremented periodically. If the counter exceeds a threshold upon being incremented, the network discards the packet.
The user specifies the rate at which the counter is decremented (this determines the average bandwidth) and the value of
the threshold (a measure of burstiness)”.
[1] The bucket (analogous to the counter) is in this case used as a meter to test the
conformance of packets, rather than as a queue to directly control them.
Another description of what is essentially the same meter version of the algorithm, the Generic Cell Rate Algorithm, is
given by the ITU-T in recommendation I.371 and in the ATM Forum’s UNI Specification.
[3][4] The description, in which the
term cell is equivalent to packet in Turner's description
[1]
is given by the ITU-T as follows: “The continuous-state leaky
bucket can be viewed as a finite capacity bucket whose real-valued content drains out at a continuous rate of 1 unit of
content per time unit and whose content is increased by the increment T for each conforming cell... If at a cell arrival the
content of the bucket is less than or equal to the limit value τ, then the cell is conforming; otherwise, the cell is nonconforming.
The capacity of the bucket (the upper bound of the counter) is (T + τ).”.
[4] These specifications also state that,
due to its finite capacity, if the contents of the bucket at the time the conformance is tested is greater than the limit value,
and hence the cell is non-conforming, then the bucket is left unchanged; that is, the water is simply not added if it would
make the bucket overflow."}, 10000);
