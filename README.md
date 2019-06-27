# Learn X as Y

<<<<<<< HEAD
[![Build Status](https://travis-ci.com/learnxasy/learnxasy.github.io.svg?branch=develop)](https://travis-ci.com/learnxasy/learnxasy.github.io)

[**Learn X as Y**](https://learnxasy.github.io) is a open education platform for hosting resources for contextualized learning. Each person has a different way
of learning, but there are few online resources available that truly reflect this. We hope that **Learn X as Y** will address some of these shortcomings in the
online education space. Everyone is encouraged to contribute curriculum content and improvements to the platform.

# Contributing

## Curriculum Writing

All lesson content can be found under the `src/lessons` directory. There can be a up to two levels of subdirectories below the `lessons` directory—the first level 
being *subjects* (i.e. the **X** in **Learn X as Y**), and the second level being the *courses* (i.e. **Y**). an `index.md` that contains a short description 
should be placed at each level.

All Markdown files under a `course` directory (except for `index.md`) are considered *lesson* pages. Lessons contain the majority of educational content. A lesson 
Markdown file should also have a `frontmatter` at the top of the file containing a title and lesson number. These values will be used when listing the lessons for 
a particular course. A sample `frontmatter` for a `sample-lesson.md` is shown below:

```
---
title: "A sample lesson"
lessonNumber: 1
---

Lesson Content...
```

## Platform Improvements

WIP

# License

MIT
=======
[![Build Status](https://travis-ci.com/learnxasy/learnxasy.github.io.svg?branch=master)](https://travis-ci.com/learnxasy/learnxasy.github.io)

WIP
>>>>>>> develop
