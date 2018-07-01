---
title: Exercise Answers
date: "2018-07-01T22:40:32.169Z"
path: "/answers/"
---
**Q1: Rank your 5 favorite, and 5 least favorite, activities from [this list](https://gist.github.com/fool/b0f254ff8c72a5765b6a9138249789d6):** 

**Q2: What is your favorite thing about providing technical support?**

**Q3: What did you think of our service during the time you used it?  Provide either some constructive criticism or some points that impressed you.  Be honest!  “It sucked” isn’t a wrong answer unless you don’t elaborate and provide some constructive criticism ;)**

**Q4: Talk about how you made your site and why you chose the tools you did.  Briefly explain a challenge you experienced in setting up this site and how you solved it.**


**Q5: Provide a link to documentation for a technical/developer-focused product, which you think are well done, and briefly explain why you think they are well done.**

[MailChimp’s API documentation](http://developer.mailchimp.com/) is a great example of a well-organized combo of developer reference and support documentation. I appreciate their interactive Playground and that their guides are both fun to read and give a helpful understanding of APIs in general—not just MailChimp. Additionally, their easy to find Error Glossary, Changelog, and API Status pages are valuable for troubleshooting issues. 

While MailChimp isn’t listed, I think this [blog from Adam at Zapier](https://zapier.com/engineering/great-documentation-examples/) does a great job outlining what makes great API documentation and what to strive for when creating your own documentation.  

**Q6: Why do you think SSL/HTTPS is important?**

The leading reason SSL/HTTPS is important is because the encryption makes it more secure to surf the web, especially when using Wifi in public spaces like airports or cafes. However, there are several additional reasons that make it important to web developers like Netlify’s customers. Even if your site doesn’t take credit cards or handle info that your visitors deem to be private, you’ll be missing out if you stay on HTTP and here’s why: 

    * Your page will be buried in the search results. Google and other search engines have been using HTTPS as ranking signal for years and, starting July 2018, Chrome will also mark all HTTP sites as “not secure”. https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html
    * To help keep pesky ads off of your site! Even legit companies are looking for unencrypted pages that they can sneak on. This could hurt your brand and take money from you. 
    * You’ll be missing out on data. Even if you’re not a data fan, there are some easy ways to use analytics to help you to improve the quality and performance of your website, but without HTTPS, you won’t have access to all of the analytics available. 

**Q7: Explain, in a couple of paragraphs, what you think 2 major challenges around DNS configuration are for less-technical internet end-users.**

**Q8: A customer writes in saying their “site won’t build”**  
*Compose your best short (2-paragraph) customer-facing answer, without any additional data, that could be useful in the generic case, but would also lead to a customer providing a more actionable response.*

Hi Jane,

I'm sorry you're having issues with your site and I'm here to help! These are a few things to check:

    1. make sure your site builds locally in your own development environment
    1. check to make sure the package versions we use to build match yours. You can find the settings for these in the [Build Settings](https://www.netlify.com/docs/build-settings) doc.
    1. scan through this handy doc with the most popular [Build Gotchas](https://www.netlify.com/docs/build-gotchas/)\

If these ideas don't fix your problem, please share more about your build including what happened when you tried my above ideas. With more details from your side, I'll be able to dig deeper on my end to help figure out what could be going on here so we can get your site working.

I'm looking forward to working with you on this!

Thank you!

Bonnie



