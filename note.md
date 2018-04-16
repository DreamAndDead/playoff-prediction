

grep  -o '/media.*logo.svg' nba-team-list.html  | awk '{print "http://china.nba.com" $0}'


convert svg to png

https://www.systutorials.com/241682/how-to-convert-svg-to-png-in-linux/

javascript control svg

http://www.petercollingridge.co.uk/data-visualisation/using-javascript-control-svg



make favicon from cmd
https://askubuntu.com/questions/867567/jpg-or-png-to-ico-using-terminal-and-back
https://www.icoconverter.com/


rel favicon
https://stackoverflow.com/questions/18301745/how-to-set-up-a-favicon



javascript float and string
https://stackoverflow.com/questions/642650/how-to-convert-string-into-float-in-javascript



webp compression

https://itsfoss.com/webp-ubuntu-linux/


compression jpeg and png

https://www.tecmint.com/optimize-and-compress-jpeg-or-png-batch-images-linux-commandline/
https://pngquant.org/
https://www.fossmint.com/trimage-lossless-png-and-jpg-compressor-tool-linux/



detect if browser is mobile browser
https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery



renew dhcp ip address
https://www.cyberciti.biz/faq/howto-linux-renew-dhcp-client-ip-address/


identify font from image
https://www.fontsquirrel.com/matcherator



jquery change url without reload the page
https://stackoverflow.com/questions/12508225/how-do-we-update-url-or-query-strings-using-javascript-jquery-without-reloading

pushState vs replaceState
https://stackoverflow.com/questions/17507091/replacestate-vs-pushstate?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

$.param()



jquery set mouse cursor
https://stackoverflow.com/questions/7185044/change-the-mouse-cursor-on-mouse-over-to-anchor-like-style





# design

对阵图从数据层面来讲，是完全的二叉树结构

root代表总冠军
0代表西部冠军
1代表东部冠军
以此类推


以0开始的都为西部球队，1开始的为东部球队

对于任意一个编号节点，如0010，
- 除去最后一个数字，剩下编号为其parent节点，这里是001（除去0，1节点，parent为root）
- 本轮与之对战的对手，其节点编号只有最后一个的区别 0/1 变换，这里是0011

每个节点有两个属性
- name，球队的名称，谁取得了这项成就
- score，在此轮和对手交手，所得比分，先得4分，球队将升至parent
```
{
  "name": "",
  "score": 0
}
```

# config

```json
{
  "map": {
    "0000": {
      "name": "",
      "score": 0
    }
  }
}
```


# todos

- 在手机上，如果放大网页，则弹窗不对
  - 在放大的前提下，居中显示，并自适应宽度
