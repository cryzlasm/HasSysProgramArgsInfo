---
title:
altTitle: SS64 Docs
date: 2016-09-04 19:26:55
useGithubLayout: false
---
<!-- #BeginLibraryItem "/Library/head_pssyntax.lbi" --><!-- #EndLibraryItem --><h1>Scopes</h1>
<p>PowerShell scopes protect access to <a href="syntax-variables.html">variables</a>, <a href="new-alias.html">aliases</a>, <a href="syntax-functions.html">functions</a>, and      PowerShell drives (<a href="new-psdrive.html">PSDrives</a>) by limiting where they can be read and changed.</p>
<p> The basic rules of scope: </p>
<ul>
<li> An item you include in a scope is visible in the scope in which it was created and in any child scope, unless you explicitly make it private. You can place <a href="syntax-variables.html">variables</a>,  <a href="new-alias.html">aliases</a>, <a href="syntax-functions.html">functions</a>, or PowerShell <a href="new-psdrive.html">drives</a> in one or more scopes.<br>
<br>
</li>
<li> An item that you created within a scope can be changed only in the scope in which it was created, unless you explicitly specify a different scope.<br>
<br>
</li>
<li> If you create an item in a scope, and the item shares its name with an item in a different scope, the original item might be hidden under the new item. But, it is not overridden or changed.</li>
</ul>
<h2>PowerShell Scopes     </h2>
<table width="90%" border="1">
<tbody><tr>
<td class="code">Global</td>
<td>The scope that is in effect when  PowerShell         starts. <a href="syntax-variables.html">Variables</a> and <a href="syntax-functions.html">functions</a> that are present when          PowerShell starts have been created in the         global scope. This includes<a href="syntax-automatic-variables.html"> automatic variables</a> and         <a href="syntax-preference.html">preference variables</a>. <br>
This also includes  variables, aliases,         and functions that are in your  PowerShell <a href="syntax-profile.html">profile</a>. </td>
</tr>
<tr>
<td class="code">Local</td>
<td>The current scope. The local scope can be the global          scope or any other scope. </td>
</tr>
<tr>
<td class="code">Script</td>
<td>The scope that is created while a script file runs. Only         the commands in the script run in the script scope. To         the commands in a script, the script scope is the local         scope. </td>
</tr>
<tr>
<td class="code">Private</td>
<td>Items in private scope cannot be seen outside of the current         scope. You can use private scope to create a private version         of an item with the same name in another scope. </td>
</tr>
<tr>
<td>Numbered Scopes</td>
<td>A numeric scope describes the <i>relative </i>position of one scope to another.         Scope <span class="code">0</span> represents the current, or local, scope. Scope <span class="code">1</span> indicates the immediate parent scope. Scope <span class="code">2</span> indicates the         parent of the parent scope, and so on. Numbered scopes         are useful if you have created many recursive         scopes. Numbered scopes are <i>relative </i>unlike the named scopes above which are <i>absolute</i>.</td>
</tr>
</tbody></table>
<p>A new scope is automatically created by running a script or function, creating     a session, or by starting a new instance of PowerShell. <br>
The result is a parent scope (the original scope) and     a child scope. Unless you explicitly make the items private, the items in the parent scope     are available to the child scope. However, items that you create and change     in the child scope do not affect the parent scope, unless you explicitly      specify the scope when you create the items.</p>
<p>The default scope for scripts is the script scope. <br>
The default scope for      functions and aliases is the local scope, even if they are defined in a      script.</p>
<h2> Inheritance       </h2>
<blockquote>
<p>A child scope does not inherit the variables, aliases, and functions from     the parent scope. <br>
Unless an item is private, the child scope can view the     items in the parent scope. And, it can change the items by explicitly      specifying the parent scope, but the items are not part of the child scope.     </p>
<p>However, a child scope is created with a set of items. Typically, it      includes all the aliases that have the <span class="code">AllScope</span> option, plus all the variables that have the     <span class="code">AllScope</span> option, plus some variables that can be used to customize the      scope, such as MaximumFunctionCount. </p>
<p>To find the items in a particular scope, use the Scope parameter of      Get-Variable or Get-Alias.      <br>
For example, to get all the variables in the local scope:<br>
<span class="code">PS C:\&gt; get-variable -scope local </span></p>
<p>To get all the variables in the global scope:<br>
<span class="code">PS C:\&gt; get-variable -scope global</span></p>
</blockquote>
<h2>Create or access items in any scope</h2>
<blockquote>
<p>To specify the scope of a new variable, alias, or function, prefix the name with a scope      modifier:</p>
<p class="code">$<b>global:</b>DemoVar = "hello" <br>
$<b>script:</b>DemoVar = "world"<br>
$<b>private:</b>DemoVar = "world" <br>
function <b>global:</b>DemoFunc        {...}</p>
<p>Because the local scope is the default, these commands both do the same thing:<span class="code"><br>
$<b>local:</b>DemoVar = "hello"<br>
$DemoVar = "hello"</span></p>
<p>To read a   variable from a different      scope, again prefix with a scope modifier:</p>
<p class="code">$<b>global:</b>DemoVar</p>
</blockquote>
<h2>AllScope</h2>
<blockquote>
<p>Variables and aliases have an -Option property that can take a value of      <span class="code">AllScope</span>. Items that have the AllScope property become part of any child      scopes that you create.      </p>
<p>An item that has the AllScope property is visible in the child scope, and     it is part of that scope. Changes to the item in any scope affect all the      scopes in which the variable is defined.</p>
</blockquote>
<p>For more about scopes see <span class="code">help about_scopes</span></p>
<p class="quote"><i>“Health is a crown that only the sick can see” ~     Arabic proverb</i></p>
<p><b>Related:</b></p>
<p><a href="source.html">Dot Sourcing</a> - persist variables and functions after a script (or scriptblock) ends.<br>
<a href="call.html">&amp; Call Operator</a> - execute a command, script or function.</p><!-- #BeginLibraryItem "/Library/foot_ps.lbi" --><p>
<!-- PowerShell300 -->
<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6140977852749469" data-ad-slot="6253539900"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script></p>
<hr>
<div id="bl" class="footer"><a href="syntax-scopes.html#"><img src="../images/top.png" width="30" height="22" alt="Back to the Top"></a></div>
<div id="br" class="footer, tagline">© Copyright <a href="http://ss64.com/">SS64.com</a> 1999-2016<br>
Some rights reserved</div><!-- #EndLibraryItem -->

