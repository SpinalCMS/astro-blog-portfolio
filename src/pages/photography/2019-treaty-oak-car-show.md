---
# imports
setup: |
  import Layout from "@/layouts/ShootLayout"
  import Image from "@/components/image/Image"

# meta
tags:
  - treaty oak
  - dripping springs
  - rod run
category: car show
date: 2019-05-27

# content
title: 2019 Treaty Oak Rod Run Car Show
description: Each year, I visit the Treaty Oak Rod Run Car Show in Dripping Springs, TX

# photos
hero: /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_005.jpg
gallery01:
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_001.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_002.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_003.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_004.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_005.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_006.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_007.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_008.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_009.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_010.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_011.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_012.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_013.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_014.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_015.jpg
  - /shoots/2019/2019-05-27-treaty-oak-car-show/treaty-oak-car-show-2019_016.jpg
---

Each year, Treaty Oak Distillery puts on a car show called the Rod Run. I'll be honest, I'm not terribly knowledgeable about classic American cars. But why wouldn't I go and listen to a bunch of large displacement V8's rumbling around the hill country?

<div>
    {frontmatter.gallery01.map((i, index) =>
        <Image
            file={i}
            sizes="(min-width: 1024px) 800px, 100vw"
        />
    )}
</div>
