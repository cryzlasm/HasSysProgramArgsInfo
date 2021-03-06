---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Transactions</h1> 
<p>Manage transacted operations<br> 
This feature enables you to start
a transaction, indicate which commands are part of the
transaction and then either commit or roll back (cancel) the transaction.</p>
<p>Commands in a transaction are managed as a unit,
either <b>all</b> commands are committed, or <b>all</b> commands are rolled
back. To participate in a transaction, both the cmdlet and the provider
must support transactions. In some cases, (e.g. the windows registry) transaction support requires Vista or above.</p>
<p> The <span class="code">-UseTransaction</span> parameter (or its alias <span class="code">-usetx</span>)<br> Cmdlets that can support transactions have a -UseTransaction
parameter. This parameter can be used only when the session contains an
active transaction and includes the command in the active
transaction.</p>
<p>The Transactions Object</p>
<p> Transactions are represented in Windows PowerShell by <span class="code">System.Management.Automation.Transaction</span></p>
<p> The object has the following 3 properties:</p>
<p><span class="code">RollbackPreference: <u>Error</u></span>, <span class="code">TerminatingError</span>, or <span class="code">Never</span><br>
Set the rollback preference with Start-Transaction. </p>
<p> <span class="code">Status: Active, Committed, and RolledBack</span><br>
The current status of the transaction.</p>
<p> <span class="code">SubscriberCount</span>: the number of subscribers to the transaction.</p>
<p>Multiple
transactions can be in progress in the same session at the same<br>
time, (nested) but only the most-recently started transaction is active. </p>
<p>INDEPENDENT TRANSACTIONS</p>
<p> If you start a transaction while another transaction is in progress, PowerShell will (by default) add a "subscriber" to the current transaction rather than start a new transaction. </p>
<p> When a transaction has multiple subscribers, a single 
Undo-Transaction command will roll back the entire
transaction for all subscribers. However, 
you must still enter a Complete-Transaction command for every subscriber.</p>
<p> You can start a transaction that is independent of the 
current transaction by using the <span class="code">-Independent</span> parameter of 
Start-Transaction.</p>
<p> When an independent transaction is finished (committed or rolled 
back), the original transaction becomes the active transaction 
again.</p>
<p>LOCKING</p>
<p>Unlike a database transaction, PowerShell transactions do not 'lock' any data, so other applications or other users could potentially change the data while a PowerShell transaction is running. </p>
<p><b>Examples</b></p>
<p>Add a new registry key: </p>
<p class="code">Start-Transaction<br>
cd hkcu:\Software<br>
New-Item SS64 -UseTransaction<br>dir S* -useTransaction<br>
Complete-Transaction</p>
<p>Start adding a new registry key, but then cancel the tx: </p>
<p class="code">Start-Transaction<br>
cd hkcu:\Software<br>
New-Item SampleKey -UseTransaction<br>
dir S* -useTransaction<br>
Undo-Transaction</p>
<p>Start a transaction setting the preference to not rollback if an error occurs:<span class="code"><br>
start-transaction -rollbackpreference Never</span></p>
<p>Evaluate an expression inside a tx:<span class="code"><br>
use-transaction <b>{</b>$myVariable.append("some more text")<b>}</b> -usetx</span></p>
<p>Get the value of the SubscriberCount property of the active transaction:</p>
<p> <span class="code">(Get-Transaction).SubscriberCount</span></p>
<p class="quote"><i>“It isn't what you do, but how you do it” ~ John Wooden</i></p>
<p><b>Related:</b></p>
<p><a href="start-transaction.html">Start-Transaction</a> - Start a new transaction <a href="complete-transaction.html"><br>
Complete-Transaction</a> - Commit the transaction<br>
<a href="get-transaction.html">Get-Transaction</a> - Get information about the active transaction <a href="use-transaction.html"><br>
Use-Transaction</a> - Add a command or expression to the transaction <a href="undo-transaction.html"><br>
Undo-Transaction</a> - Roll back a transaction</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-transactions.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2015<br>
Some rights reserved</div><!-- #EndLibraryItem -->

