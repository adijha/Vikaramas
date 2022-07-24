<h2><a href="https://leetcode.com/problems/merge-two-sorted-lists/">21. Merge Two Sorted Lists</a></h2><h3>Easy</h3><hr><div style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;"><p style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">You are given the heads of two sorted linked lists <code style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 27.8574px !important;">list1</code> and <code style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 27.8574px !important;">list2</code>.</p>

<p style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">Merge the two lists in a one <strong style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>

<p style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">Return <em style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">the head of the merged linked list</em>.</p>

<p style="transition: font 0s ease 0s; font-size: 20px !important;">&nbsp;</p>
<p style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;"><strong style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;">
<pre style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;"><strong style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;">Input:</strong> list1 = [1,2,4], list2 = [1,3,4]
<strong style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;">Output:</strong> [1,1,2,3,4,4]
</pre>

<p style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;"><strong style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">Example 2:</strong></p>

<pre style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;"><strong style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;">Input:</strong> list1 = [], list2 = []
<strong style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;">Output:</strong> []
</pre>

<p style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;"><strong style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">Example 3:</strong></p>

<pre style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;"><strong style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;">Input:</strong> list1 = [], list2 = [0]
<strong style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 29.7142px !important;">Output:</strong> [0]
</pre>

<p style="transition: font 0s ease 0s; font-size: 20px !important;">&nbsp;</p>
<p style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;"><strong style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">Constraints:</strong></p>

<ul style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">
	<li style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">The number of nodes in both lists is in the range <code style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 27.8574px !important;">[0, 50]</code>.</li>
	<li style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;"><code style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 27.8574px !important;">-100 &lt;= Node.val &lt;= 100</code></li>
	<li style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">Both <code style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 27.8574px !important;">list1</code> and <code style="transition: font 0s ease 0s; font-size: 18.5716px !important; line-height: 27.8574px !important;">list2</code> are sorted in <strong style="transition: font 0s ease 0s; font-size: 20px !important; line-height: 30px !important;">non-decreasing</strong> order.</li>
</ul>
</div>