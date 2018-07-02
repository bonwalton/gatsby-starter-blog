---
title: Exercise Answers
date: "2018-07-02T22:40:32.169Z"
path: "/answers/"
---
<span style="color:teal">**Q1: Rank your 5 favorite, and 5 least favorite, activities from <a href="https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6" target="blank">this list</a>.**

_Favorites:_

<ul style="margin-left: 30px;">

* Respond to 50+ support requests via email or chat most days
* Set up your own copy of several static site frameworks for debugging
* Suggest and champion improvements to the Support team's workflow to your colleagues in and out of Support
* Write and maintain documentation for our software and blog posts for our website
* Respond to Netlify customers on Twitter </ul>

_Not Yet Favorites:_

<ul style="margin-left: 30px;">

* Manage a Support team
* Help train and onboard new support teammates
* Receive occasional phone calls requesting support from our highest-value customers
* Deliver a talk to many people you don't know at a conference or meetup
* Engage multiple users at once via chat to answer their questions and troubleshoot problems </ul>

<span style="color:teal">**Q2: What is your favorite thing about providing technical support?**

My favorite thing about about helping customers is being able to get them closer to achieving their goals! An added bonus is that I typically also grow my own skills with each ticket. I thrive on solving puzzles, both technical and human-based. Even if it’s a question I’ve seen before, I gain satisfaction that it helps me to learn how to make improvements to our documentation or possibly lead to feature requests.


<span style="color:teal">**Q3: What did you think of our service during the time you used it?**
<br />Provide either some constructive criticism or some points that impressed you. Be honest! “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)

It was so easy to get started with Netlify and the integration with my GitHub was so smooth, that I was thrown off by the template. I thought it'd be similar to some other sites I've used where I pick a template, simply swap out my content, and be done! While the Netlify deploy menu was very helpful, after chugging through trying to edit in GitHub, I knew I was doing it wrong! I carefully re-read the instructions, installed Gatsby, and brought it back to my CLI where I instantly felt at home.

Additionally, I completely understand why Netlify encourages users to sign up for a custom domain through your site since it can be a huge pain to correctly set up a custom domain! However, this can make it tricky for users to take their domain with them to another site if needed. A way to improve this could be making easy-to-find documentation similar to the seemingly <a href="https://www.godaddy.com/help/domains-1000003#nav-5" target="blank">helpful resources from GoDaddy</a>.

<span style="color:teal">**Q4: Talk about how you made your site and why you chose the tools you did.**  
Briefly explain a challenge you experienced in setting up this site and how you solved it.

Being new to this style of web development, I didn't have experience with any of the static generators listed on the StaticGen site. I chose Gatsby because it was the first one on the list with JavaScript and React which lines up with the Codecademy courses I'm taking.

I was happy to see the option to deploy a template site "with just one click" and I chose the "Gatsby starter blog". As I mentioned in Q3, the template confused me at the start. I've used GitHub before as a contributor at my last company, but I had not deployed my own repositories before. I wasted time using GitHub to edit my code which was not only slow, but stressful knowing that every tweak was visible to the world! I also tried out switching templates to the "Gatsby default starter site", but got I quickly realized I preferred using Markdown and switched back to original template.

Once I got to a spot that I understood, I was off and really enjoying it! I used my terminal to load it all up, I did my editing in Atom, and when I was ready, I deployed it to the world! It wasn't as graceful as I had hoped, but I'm grateful for how much I've learned doing this exercise and I'm excited for finding more opportunities to build on Netlify!


<span style="color:teal">**Q5: Provide a link to documentation for a technical/developer-focused product, which you think are well done, and briefly explain why you think they are well done.**

<a href="http://developer.mailchimp.com/" target="blank">MailChimp’s API documentation</a> is a great example of a well-organized combo of developer reference and support documentation. I appreciate their interactive Playground and that their guides are both fun to read and give a helpful understanding of APIs in general—not just MailChimp. Additionally, their easy to find Error Glossary, Changelog, and API Status pages are valuable for troubleshooting issues.

While MailChimp isn’t listed, I think this <a href="https://zapier.com/engineering/great-documentation-examples/" target="blank">blog from Adam at Zapier</a> does a great job outlining what makes great API documentation and what to strive for when creating your own documentation.  

<span style="color:teal">**Q6: Why do you think SSL/HTTPS is important?**

The leading reason SSL/HTTPS is important is because the encryption makes it more secure to surf the web, especially when using Wifi in public spaces like airports or cafes. However, there are several additional reasons that make it important to web developers and this <a href="https://www.netlify.com/blog/2014/10/03/five-reasons-you-want-https-for-your-static-site/" target="blank">blog from Mathias at Netlify</a> is among the most compelling that I found.

Put in my words: even if your site doesn’t take credit cards or handle info that your visitors deem to be private, you’ll be missing out if you stay on HTTP and here are some top reasons why:

<ul style="margin-left: 30px;">

* **Your page will be buried in the search results.** Google and other search engines have been using HTTPS as ranking signal for years and soon Chrome will also mark all HTTP sites as <a href="https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html" target="blank">"not secure"</a>.
* **To help keep pesky ads off of your site!** Even legit companies are looking for unencrypted pages that they can sneak on. This could hurt your brand and take money from you.
* **You’ll be missing out on data.** Even if you’re not a data fan, there are some easy ways to use analytics to help you to improve the quality and performance of your website, but without HTTPS, you won’t have access to all of the analytics available. </ul>

<span style="color:teal">**Q7: Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users.**

Buying a domain name is easy, but understanding all of the things involved with actually using your domain name gets complicated—especially for the less-technical internet end-user! A major challenge is the inconsistency with DNS providers. With thousands of DNS providers, it can it be tough to find where to go to make your changes and they can vary significantly on things like the type of records they support and the time it takes to respond to your changes.

A second major challenge is understanding how to setup the configuration you need. Even with Google and a glossary of terms to define things like DNS Zones and the type of DNS records out there, it’s tricky to conceptualize what you really need.


<span style="color:teal">**Q8: A customer writes in saying their “site won’t build”**  
Compose your best short (2-paragraph) customer-facing answer, without any additional data, that could be useful in the generic case, but would also lead to a customer providing a more actionable response.

Hi Jane,

I'm sorry you're having issues with your site and I'm here to help! These are a few things to check:

<ul style="margin-left: 30px;">

1. make sure your site builds locally in your own development environment
1. check to make sure the package versions we use to build match yours (you can find the settings for these in the <a href="https://www.netlify.com/docs/build-settings" target="blank">Build Settings</a>
1. scan through this handy doc with the most popular <a href="https://www.netlify.com/docs/build-gotchas/" target="blank">Build Gotchas</a> </ul>

If these ideas don't fix your problem, please share more about your build including what happened when you tried my above ideas. With more details from your side, I'll be able to dig deeper on my end to help figure out what could be going on here so we can get your site working.

I'm looking forward to working with you on this!

Thank you!

Bonnie

<span style="color:teal">**(optional/bonus) Could you give us a suggestion to improve this test or the job posting?**

I've really enjoyed working on this test and think it aligns well with the job post. Especially since I'm new at this, I appreciated the line: "Not sure you meet 100% of our qualifications?  Please apply anyway!"
