// pages/self/self.js
var app = getApp();
var ownBoard = [0,0,0,0,0,0,0,0,0];
var otherBoard = [0,0,0,0,0,0,0,0,0];
var figure ; //骰子点数
var centreState = 1; //骰子标识
var turn = 1
var topState = 0; //玩家1回合的标识
var downState = 0; //玩家2回合的标识
var topScore =0 //玩家1总分
var downScore = 0 //玩家2总分
var top_id  = 0 //玩家1 top 骰子放在哪里
var down_id = 0 //玩家2 down 骰子放在哪里
var hosted1 = 0 //玩家1托管标识
var hosted2 = 0 //玩家2托管标识
Page({
  data:{
    turn0 : "0",//回合图标标志位
    top_1_score : "0",
    top_2_score : "0",
    top_3_score : "0",
    down_1_score : "0",
    down_2_score : "0",
    down_3_score : "0",
    top_score : "0",
    down_score : "0",
    cnt1: app.cnt1,
    cnt2:app.cnt2,
    top11 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top12 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top13 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top21 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top22 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top23 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top31 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top32 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    top33 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down11 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down12 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down13 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down21 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down22 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down23 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down31 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down32 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    down33 : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
    touzi : 'https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187',
  },
  //玩家一托管
  host_switch1(){
    if(hosted1 === 1)
      hosted1 = 0
    else  
      hosted1 = 1
    //console.log(turn,hosted1)
    if(turn === 1 && hosted1 === 1){
      this.host1();
    }
    console.log("hosted1" + hosted1)
  },
  host1(){
      this.ai_Host1()
  },
  //玩家二托管
  host_switch2(){
    if(hosted2 === 1)
      hosted2 = 0
    else  
      hosted2 = 1
    if(turn === 2 && hosted2 === 1){
        this.host2()
    }
    console.log("hosted2" + hosted2)
  },
  host2(){
    this.ai_Host2()
  },
  // 页面加载
  onLoad(){
    turn =  Math.floor(Math.random() * 2 + 1)
    this.setData({
      turn0:turn
    })
    console.log(turn)
    
  },

//获取图片地址
  fetchImgAddr(i){
    if(i==0){
      return "https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/0.png?sign=ae050d4cc12c676b7ce99e80d1ec1646&t=1665694187"
    }
    else if(i===1){
      return "https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/1.png?sign=e76f843665062b16a65543263e81ca99&t=1665694254"
    }
    else if(i===2){
      return "https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/2.png?sign=45017a0d88a1d78a4bad3dc8b74ac8e4&t=1665694267"
    }
    else if(i===3){
      return "https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/3.png?sign=eae0292d5520d5422c6c28a0fc669572&t=1665694277"
    }
    else if(i===4){
      return "https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/4.png?sign=fdc6b84af427f42d6ea9355563d24aeb&t=1665694286"
    }
    else if(i===5){
      return "https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/5.png?sign=4ea5e913a10f0d20d70af1670b0ead26&t=1665694296"
    }
    else if(i===6){
      return "https://6d79-my-test-5gsknxhh42d2909f-1314291073.tcb.qcloud.la/qipan/6.png?sign=704c5989ffa9ba6519753f64fd9eec9e&t=1665694305"
    } 
  },
// 投掷骰子事件
  touClick() {
    if (centreState === 1) {
      // 随机骰子
      figure =  Math.floor(Math.random() * 6 + 1)
      console.log("骰子点数" + figure)
      var tou_image = this.fetchImgAddr(figure)
      this.setData({
        touzi : tou_image
      })
      centreState = 0
      // turn=2可点击下九宫格（玩家2），turn=1可点击上九宫格（玩家1）
      if(turn === 2){
          topState = 0
          downState = 1  
      }
      if(turn === 1){
          topState = 1
          downState = 0
      }
      console.log("centreState" + centreState)
    }
  },

  //放置骰子，判断是哪个按钮按下了，改变ownBoard[]或otherBoard[]对应位置的值（骰子点数），并放置对应骰子点数的图片
  put_tou(){
    if(down_id === 1 && downState === 1 && turn ===2){
      ownBoard[0] = figure
      var image1 = this.fetchImgAddr(figure)
      this.setData({
        down11 : image1
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 2 && downState === 1 && turn ===2){
      ownBoard[1] = figure
      var image2 = this.fetchImgAddr(figure)
      this.setData({
        down12 : image2
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 3 && downState === 1 && turn ===2){
      ownBoard[2] = figure
      var image3 = this.fetchImgAddr(figure)
      this.setData({
        down13 : image3
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 4 && downState === 1 && turn ===2){
      ownBoard[3] = figure
      var image4 = this.fetchImgAddr(figure)
      this.setData({
        down21 : image4
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 5 && downState === 1 && turn ===2){
      ownBoard[4] = figure
      var image5 = this.fetchImgAddr(figure)
      this.setData({
        down22 : image5
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 6 && downState === 1 && turn ===2){
      ownBoard[5] = figure
      var image6 = this.fetchImgAddr(figure)
      this.setData({
        down23 : image6
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 7 && downState === 1 && turn ===2){
      ownBoard[6] = figure
      var image7 = this.fetchImgAddr(figure)
      this.setData({
        down31 : image7
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 8 && downState === 1 && turn ===2){
      ownBoard[7] = figure
      var image8 = this.fetchImgAddr(figure)
      this.setData({
        down32 : image8
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(down_id === 9 && downState === 1 && turn ===2){
      ownBoard[8] = figure
      var image9 = this.fetchImgAddr(figure)
      this.setData({
        down33 : image9
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(top_id === 1 && topState === 1 && turn ===1){
      otherBoard[0] = figure
      var image1 = this.fetchImgAddr(figure)
      this.setData({
        top11 : image1
      })
      console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 2 && topState === 1 && turn ===1){
      otherBoard[1] = figure
      var image2 = this.fetchImgAddr(figure)
        this.setData({
          top12 : image2
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 3 && topState === 1 && turn ===1){
      otherBoard[2] = figure
      var image3 = this.fetchImgAddr(figure)
        this.setData({
          top13 : image3
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 4 && topState === 1 && turn ===1){
      otherBoard[3] = figure
      var image4 = this.fetchImgAddr(figure)
        this.setData({
          top21 : image4
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 5 && topState === 1 && turn ===1){
      otherBoard[4] = figure
      var image5 = this.fetchImgAddr(figure)
        this.setData({
          top22 : image5
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 6 && topState === 1 && turn ===1){
      otherBoard[5] = figure
      var image6 = this.fetchImgAddr(figure)
        this.setData({
          top23 : image6
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 7 && topState === 1 && turn ===1){
      otherBoard[6] = figure
      var image7 = this.fetchImgAddr(figure)
        this.setData({
          top31 : image7
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 8 && topState === 1 && turn ===1){
      otherBoard[7] = figure
      var image8 = this.fetchImgAddr(figure)
        this.setData({
          top32 : image8
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(top_id === 9 && topState === 1 && turn ===1){
      otherBoard[8] = figure
      var image9 = this.fetchImgAddr(figure)
        this.setData({
          top33 : image9
        })
        console.log("otherBoard" + otherBoard)
    }

  },
  // 判断行消除对方骰子
  remove () {
    //玩家1回合
    if(turn === 1 && topState === 1){
      //第一行
      if(1 <= top_id && top_id <= 3){
        for(var i = 0; i < 3 ; i++){
          if(otherBoard[top_id - 1] === ownBoard[i]){
            ownBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(ownBoard[0] === 0){
              this.setData({
                down11 : image
              })
            }
            if(ownBoard[1] === 0){
              this.setData({
                down12 : image
              })
            }
            if(ownBoard[2] === 0){
              this.setData({
                down13 : image
              })
            } 
          }
        }
      }
      //第二行
      if(4 <= top_id && top_id <= 6){
        for(var i = 3; i < 6 ; i++){
          if(otherBoard[top_id - 1] === ownBoard[i]){
            ownBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(ownBoard[3] === 0){
              this.setData({
                down21 : image
              })
            }
            if(ownBoard[4] === 0){
              this.setData({
                down22 : image
              })
            }
            if(ownBoard[5] === 0){
              this.setData({
                down23 : image
              })
            } 
          }
        }
      }
      //第三行
      if(7 <= top_id && top_id <= 9){
        for(var i = 6; i < 9 ; i++){
          if(otherBoard[top_id - 1] === ownBoard[i]){
            ownBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(ownBoard[6] === 0){
              this.setData({
                down31 : image
              })
            }
            if(ownBoard[7] === 0){
              this.setData({
                down32 : image
              })
            }
            if(ownBoard[8] === 0){
              this.setData({
                down33 : image
              })
            } 
          }
        }
      }
    }
    //玩家2回合
    if(turn === 2 && downState === 1){
      //第一行
      if(1 <= down_id && down_id <= 3){
        for(var i = 0; i < 3 ; i++){
          if(ownBoard[down_id - 1] === otherBoard[i]){
            otherBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(otherBoard[0] === 0){
              this.setData({
                top11 : image
              })
            }
            if(otherBoard[1] === 0){
              this.setData({
                top12 : image
              })
            }
            if(otherBoard[2] === 0){
              this.setData({
                top13 : image
              })
            } 
          }
        }
      }
      //第二行
      if(4 <= down_id && down_id <= 6){
        for(var i = 3; i < 6 ; i++){
          if(ownBoard[down_id - 1] === otherBoard[i]){
            otherBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(otherBoard[3] === 0){
              this.setData({
                top21 : image
              })
            }
            if(otherBoard[4] === 0){
              this.setData({
                top22 : image
              })
            }
            if(otherBoard[5] === 0){
              this.setData({
                top23 : image
              })
            } 
          }
        }
      }
      //第三行
      if(7 <= down_id && down_id <= 9){
        for(var i = 6; i < 9 ; i++){
          if(ownBoard[down_id - 1] === otherBoard[i]){
            otherBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(otherBoard[6] === 0){
              this.setData({
                top31 : image
              })
            }
            if(otherBoard[7] === 0){
              this.setData({
                top32 : image
              })
            }
            if(otherBoard[8] === 0){
              this.setData({
                to33 : image
              })
            } 
          }
        }
      }
    }
  },
  // 玩家2分数
  downCount(){
    var score1 = 0
    var score2 = 0
    var score3 = 0
    // 第一行
    if(ownBoard[0] === ownBoard[1] && ownBoard[0] === ownBoard[2]){
      score1 = ownBoard[0]*9
    }else if(ownBoard[0] !== ownBoard[1] && ownBoard[0] !== ownBoard[2] && ownBoard[1] !== ownBoard[2]){
      score1 = ownBoard[0] + ownBoard[1] + ownBoard[2]
    }else{
      if(ownBoard[0] === ownBoard[1]){
        score1 = ownBoard[0] * 4 + ownBoard[2]
      }else if(ownBoard[0] === ownBoard[2]){
        score1 = ownBoard[0] * 4 + ownBoard[1]
      }else{
        score1 = ownBoard[1] * 4 + ownBoard[0]
      }
    }
      this.setData({
        down_1_score : score1
      })
    // 第二行
    if(ownBoard[3] === ownBoard[4] && ownBoard[3] === ownBoard[5]){
      score2 = ownBoard[3]*9
    }else if(ownBoard[3] !== ownBoard[4] && ownBoard[3] !== ownBoard[5] && ownBoard[4] !== ownBoard[5]){
      score2 = ownBoard[3] + ownBoard[4] + ownBoard[5]
    }else{
      if(ownBoard[3] === ownBoard[4]){
        score2 = ownBoard[3] * 4 + ownBoard[5]
      }else if(ownBoard[3] === ownBoard[5]){
        score2 = ownBoard[3] * 4 + ownBoard[4]
      }else{
        score2 = ownBoard[4] * 4 + ownBoard[3]
      }
    }
      this.setData({
        down_2_score : score2
      })
    // 第三行
    if(ownBoard[6] === ownBoard[7] && ownBoard[6] === ownBoard[8]){
      score3 = ownBoard[6]*9
    }else if(ownBoard[6] !== ownBoard[7] && ownBoard[6] !== ownBoard[8] && ownBoard[7] !== ownBoard[8]){
      score3 = ownBoard[6] + ownBoard[7] + ownBoard[8]
    }else{
      if(ownBoard[6] === ownBoard[7]){
        score3 = ownBoard[6] * 4 + ownBoard[8]
      }else if(ownBoard[6] === ownBoard[8]){
        score3 = ownBoard[6] * 4 + ownBoard[7]
      }else{
        score3 = ownBoard[7] * 4 + ownBoard[6]
      }
    }
      this.setData({
        down_3_score : score3
      })
      downScore = score1 + score2 + score3
    this.setData({
      down_score : downScore
    })
  },
  // 玩家1分数
  topCount(){
    var score1 = 0
    var score2 = 0
    var score3 = 0
    // 第一行
    if(otherBoard[0] === otherBoard[1] && otherBoard[0] === otherBoard[2]){
      score1 = otherBoard[0]*9
    }else if(otherBoard[0] !== otherBoard[1] && otherBoard[0] !== otherBoard[2] && otherBoard[1] !== otherBoard[2]){
      score1 = otherBoard[0] + otherBoard[1] + otherBoard[2]
    }else{
      if(otherBoard[0] === otherBoard[1]){
        score1 = otherBoard[0] * 4 + otherBoard[2]
      }else if(otherBoard[0] === otherBoard[2]){
        score1 = otherBoard[0] * 4 + otherBoard[1]
      }else{
        score1 = otherBoard[1] * 4 + otherBoard[0]
      }
    }
      this.setData({
        top_1_score : score1
      })
    // 第二行
    if(otherBoard[3] === otherBoard[4] && otherBoard[3] === otherBoard[5]){
      score2 = otherBoard[3]*9
    }else if(otherBoard[3] !== otherBoard[4] && otherBoard[3] !== otherBoard[5] && otherBoard[4] !== otherBoard[5]){
      score2 = otherBoard[3] + otherBoard[4] + otherBoard[5]
    }else{
      if(otherBoard[3] === otherBoard[4]){
        score2 = otherBoard[3] * 4 + otherBoard[5]
      }else if(otherBoard[3] === otherBoard[5]){
        score2 = otherBoard[3] * 4 + otherBoard[4]
      }else{
        score2 = otherBoard[4] * 4 + otherBoard[3]
      }
    }
      this.setData({
        top_2_score : score2
      })
    // 第三行
    if(otherBoard[6] === otherBoard[7] && otherBoard[6] === otherBoard[8]){
      score3 = otherBoard[6]*9
    }else if(otherBoard[6] !== otherBoard[7] && otherBoard[6] !== otherBoard[8] && otherBoard[7] !== otherBoard[8]){
      score3 = otherBoard[6] + otherBoard[7] + otherBoard[8]
    }else{
      if(otherBoard[6] === otherBoard[7]){
        score3 = otherBoard[6] * 4 + otherBoard[8]
      }else if(otherBoard[6] === otherBoard[8]){
        score3 = otherBoard[6] * 4 + otherBoard[7]
      }else{
        score3 = otherBoard[7] * 4 + otherBoard[6]
      }
    }
      this.setData({
        top_3_score : score3
      })
      topScore = score1 + score2 + score3
    this.setData({
      top_score : topScore
    })
  },
  //判断是否结束
  end(){
    var i = 0
    var j = 0
    for(var x = 0 ; x < 9 ; x++){
      if(otherBoard[i] !== 0){
        i++
      }
      if(ownBoard[j] !== 0){
        j++
      }
    }
    if(i === 9){
      console.log("点击了跳转")
      app.cnt1 = topScore
      app.cnt2 = downScore
      wx.navigateTo({
        url: '/pages/jiesuan/jiesuan',
      })
      console.log("跳转成功")
    }
    if(j === 9){
      console.log("点击了跳转")
      app.cnt1 = topScore
      app.cnt2 = downScore
      wx.navigateTo({
        url: '/pages/jiesuan/jiesuan',
      })
      console.log("跳转成功")
    }
  },

  //玩家1（top）
  player1(){
    if(centreState === 0 && topState === 1 && turn === 1 && hosted1 === 0){
      console.log("调用了player1")
      // //调用函数，确定下一步走哪里
      // this.nextStap
      // //下一步的值
      // var _nextStap = this.nextStap(ownBoard,otherBoard,figure)
      // //调整为自己下完这一步后的棋盘,top棋盘的调整
      // otherBoard[_nextStap-1] = figure
      this.put_tou()
      this.remove()
      this.topCount()
      this.downCount()
      this.end()
      centreState = 1
      topState = 0
      turn = 2
      this.setData({
        turn0:turn
      })
    }
  },
    
  //玩家2（down）
  player2(){
    if(centreState === 0 && downState === 1 && turn === 2 && hosted2 === 0){
      console.log("调用了player2")
      // //调用函数，确定下一步走哪里
      // this.nextStap
      // //下一步的值
      // var _nextStap = this.nextStap(ownBoard,otherBoard,figure)
      // //调整为自己下完这一步后的棋盘，down棋盘的调整
      // ownBoard[_nextStap-1] = figure
      this.put_tou()
      this.remove()
      this.topCount()
      this.downCount()
      this.end()
      centreState = 1
      downState = 0
      turn = 1
      this.setData({
        turn0:turn
      })
    }
  },
  //AI实现，输入当前轮次己方的棋盘情况、对方的棋盘情况和己方本轮次随机得到的骰子点数，再返回下一步要走哪里
  nextStap(ownBoard=[],otherBoard=[],figure){
    //用AI，计算ownBoard,otherBoard，返回下一步要走哪里
    // 玩家2落点
    if(centreState === 0 && downState === 1 && turn === 2 && hosted2 === 1){
      for(var x = 0 ; x < 9 ; x++){
        //对方棋盘中有和当前骰子点数相同的格子
        if(otherBoard[x] === figure){
          // 判定行数
          // 第一行
          if(0 < x && x < 3){
            //如果己方第一行未满
            for(var y = 0 ; y < 3 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
            //己方第一行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 3 ; y < 9 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
          }
          // 第二行
          if(3 < x && x < 6){
            //如果己方第二行未满
            for(var y = 3 ; y < 6 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
            //己方第二行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 9 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
          }
          // 第三行
          if(6 < x && x < 9){
            //如果己方第三行未满
            for(var y = 6 ; y < 9 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
            //己方第三行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 6 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
          }
        }
      }
      //对方棋盘没有和己方棋盘相同的点数
      for(var x = 0 ; x < 9 ; x++){
        //判断己方棋盘有没有相同的点数，有就放在同一行
        //己方有相同点数的格子
        if(ownBoard[x] === figure){
          // 判定行数
          // 第一行
          if(0 < x && x < 3){
            //如果己方第一行未满
            for(var y = 0 ; y < 3 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
            //己方第一行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 3 ; y < 9 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
          }
          // 第二行
          if(3 < x && x < 6){
            //如果己方第二行未满
            for(var y = 3 ; y < 6 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
            //己方第二行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 9 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
          }
          // 第三行
          if(6 < x && x < 9){
            //如果己方第三行未满
            for(var y = 6 ; y < 9 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
            //己方第三行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 6 ; y++){
              if(ownBoard[y] === 0){
                console.log("玩家2落点" + y)
                return y
              }
            }
          }
        }
      }
      //己方棋盘也没有相同点数,按照棋盘顺序放在空位置
      for(var x = 0 ; x < 9 ; x++){
        if(ownBoard[x] === 0){
          console.log("玩家2落点" + y)
          return x
        }
      }
    }

     // 玩家1落点
    if(centreState === 0 && topState === 1 && turn === 1 && hosted1 === 1){
      for(var x = 0 ; x < 9 ; x++){
        //对方棋盘中有和当前骰子点数相同的格子
        if(ownBoard[x] === figure){
          // 判定行数
          // 第一行
          if(0 < x && x < 3){
            //如果己方第一行未满
            for(var y = 0 ; y < 3 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
            //己方第一行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 3 ; y < 9 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
          }
          // 第二行
          if(3 < x && x < 6){
            //如果己方第二行未满
            for(var y = 3 ; y < 6 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
            //己方第二行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 9 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
          }
          // 第三行
          if(6 < x && x < 9){
            //如果己方第三行未满
            for(var y = 6 ; y < 9 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
            //己方第三行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 6 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
          }
        }
      }
      //对方棋盘没有和己方棋盘相同的点数
      for(var x = 0 ; x < 9 ; x++){
        //判断己方棋盘有没有相同的点数，有就放在同一行
        //己方有相同点数的格子
        if(otherBoard[x] === figure){
          // 判定行数
          // 第一行
          if(0 < x && x < 3){
            //如果己方第一行未满
            for(var y = 0 ; y < 3 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
            //己方第一行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 3 ; y < 9 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
          }
          // 第二行
          if(3 < x && x < 6){
            //如果己方第二行未满
            for(var y = 3 ; y < 6 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
            //己方第二行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 9 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
          }
          // 第三行
          if(6 < x && x < 9){
            //如果己方第三行未满
            for(var y = 6 ; y < 9 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
            //己方第三行已满，就放在己方空的位置上
            //可通过判定分数来改进落点
            for(var y = 0 ; y < 6 ; y++){
              if(otherBoard[y] === 0){
                console.log("玩家1落点" + y)
                return y
              }
            }
          }
        }
      }
      //己方棋盘也没有相同点数,按照棋盘顺序放在空位置
      for(var x = 0 ; x < 9 ; x++){
        if(otherBoard[x] === 0){
          console.log("玩家1落点" + y)
          return x
        }
      }
    }
  },

  //按钮点击事件down1-9,top1-9,返回的值为：点击的是哪个按钮
  down1(){
    if(ownBoard[0]===0 && downState === 1 && centreState === 0){
      down_id = 1
      this.player2()
      console.log("调用player2")
    }
  },
  down2(){
    if(ownBoard[1]===0 && downState === 1 && centreState === 0){
      down_id = 2
      console.log("点击了down2:" + down_id)
      this.player2()
    }
  },
  down3(){
    if(ownBoard[2]===0 && downState === 1 && centreState === 0){
      down_id = 3
      console.log("点击了down3:" + down_id)
      this.player2()
    }
  },
  down4(){
    if(ownBoard[3]===0 && downState === 1 && centreState === 0){
        down_id = 4
        console.log("点击了down4:" + down_id)
        this.player2()
    }
  },
  down5(){
    if(ownBoard[4]===0 && downState === 1 && centreState === 0){
        down_id = 5
        console.log("点击了down5:" + down_id)
        this.player2()
    }
  },
  down6(){
    if(ownBoard[5]===0 && downState === 1 && centreState === 0){
        down_id = 6
        console.log("点击了down6:" + down_id)
        this.player2()
    }
  },
  down7(){
    if(ownBoard[6]===0 && downState === 1 && centreState === 0){
        down_id = 7
        console.log("点击了down7:" + down_id)
        this.player2()
    }
  },
  down8(){
    if(ownBoard[7]===0 && downState === 1 && centreState === 0){
        down_id = 8
        console.log("点击了down8:" + down_id)
        this.player2()
    }
  },
  down9(){
    if(ownBoard[8]===0 && downState === 1 && centreState === 0){
      down_id = 9
      console.log("点击了down9:" + down_id)
      this.player2()
    }
  },
  top1(){
    if(otherBoard[0]===0 && topState === 1 && centreState === 0){
      top_id = 1
      console.log("点击了top1:" + top_id)
      this.player1()
    }
  },
  top2(){
    if(otherBoard[1]===0 && topState === 1 && centreState === 0){
      top_id = 2
      console.log("点击了top2:" + top_id)
      this.player1()
    }
  },
  top3(){
    if(otherBoard[2]===0 && topState === 1 && centreState === 0){
      top_id = 3
      console.log("点击了top3:" + top_id)
      this.player1()
    }
  },
  top4(){
    if(otherBoard[3]===0 && topState === 1 && centreState === 0){
        top_id = 4
        console.log("点击了top4:" + top_id)
        this.player1()
    }
  },
  top5(){
    if(otherBoard[4]===0 && topState === 1 && centreState === 0){
        top_id = 5
        console.log("点击了top5:" + top_id)
        this.player1()
    }
  },
  top6(){
    if(otherBoard[5]===0 && topState === 1 && centreState === 0){
        top_id = 6
        console.log("点击了top6:" + top_id)
        this.player1()
    }
  },
  top7(){
    if(otherBoard[6]===0 && topState === 1 && centreState === 0){
        top_id = 7
        console.log("点击了top7:" + top_id)
        this.player1()
    }
  },
  top8(){
    if(otherBoard[7]===0 && topState === 1 && centreState === 0){
      top_id = 8
      console.log("点击了top8:" + top_id)
      this.player1()
    }
  },
  top9(){
    if(otherBoard[8]===0 && topState === 1 && centreState === 0){
      top_id = 9
      console.log("点击了top9:" + top_id)
      this.player1()
    }
  },
  ai_put_tou(ai_next_step){
    if(ai_next_step === 1 && downState === 1 && turn ===2){
      ownBoard[0] = figure
      var image1 = this.fetchImgAddr(figure)
      this.setData({
        down11 : image1
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 2 && downState === 1 && turn ===2){
      ownBoard[1] = figure
      var image2 = this.fetchImgAddr(figure)
      this.setData({
        down12 : image2
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 3 && downState === 1 && turn ===2){
      ownBoard[2] = figure
      var image3 = this.fetchImgAddr(figure)
      this.setData({
        down13 : image3
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 4 && downState === 1 && turn ===2){
      ownBoard[3] = figure
      var image4 = this.fetchImgAddr(figure)
      this.setData({
        down21 : image4
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 5 && downState === 1 && turn ===2){
      ownBoard[4] = figure
      var image5 = this.fetchImgAddr(figure)
      this.setData({
        down22 : image5
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 6 && downState === 1 && turn ===2){
      ownBoard[5] = figure
      var image6 = this.fetchImgAddr(figure)
      this.setData({
        down23 : image6
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 7 && downState === 1 && turn ===2){
      ownBoard[6] = figure
      var image7 = this.fetchImgAddr(figure)
      this.setData({
        down31 : image7
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 8 && downState === 1 && turn ===2){
      ownBoard[7] = figure
      var image8 = this.fetchImgAddr(figure)
      this.setData({
        down32 : image8
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 9 && downState === 1 && turn ===2){
      ownBoard[8] = figure
      var image9 = this.fetchImgAddr(figure)
      this.setData({
        down33 : image9
      })
      console.log("ownBoard" + ownBoard)
    }
    else if(ai_next_step === 1 && topState === 1 && turn ===1){
      otherBoard[0] = figure
      var image1 = this.fetchImgAddr(figure)
      this.setData({
        top11 : image1
      })
      console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 2 && topState === 1 && turn ===1){
      otherBoard[1] = figure
      var image2 = this.fetchImgAddr(figure)
        this.setData({
          top12 : image2
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 3 && topState === 1 && turn ===1){
      otherBoard[2] = figure
      var image3 = this.fetchImgAddr(figure)
        this.setData({
          top13 : image3
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 4 && topState === 1 && turn ===1){
      otherBoard[3] = figure
      var image4 = this.fetchImgAddr(figure)
        this.setData({
          top21 : image4
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 5 && topState === 1 && turn ===1){
      otherBoard[4] = figure
      var image5 = this.fetchImgAddr(figure)
        this.setData({
          top22 : image5
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 6 && topState === 1 && turn ===1){
      otherBoard[5] = figure
      var image6 = this.fetchImgAddr(figure)
        this.setData({
          top23 : image6
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 7 && topState === 1 && turn ===1){
      otherBoard[6] = figure
      var image7 = this.fetchImgAddr(figure)
        this.setData({
          top31 : image7
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 8 && topState === 1 && turn ===1){
      otherBoard[7] = figure
      var image8 = this.fetchImgAddr(figure)
        this.setData({
          top32 : image8
        })
        console.log("otherBoard" + otherBoard)
    }
    else if(ai_next_step === 9 && topState === 1 && turn ===1){
      otherBoard[8] = figure
      var image9 = this.fetchImgAddr(figure)
        this.setData({
          top33 : image9
        })
        console.log("otherBoard" + otherBoard)
    }
  },
  // 判断行消除对方骰子
  ai_remove (_nextStap) {
    //玩家1回合
    if(turn === 1 && topState === 1){
      //第一行
      if(1 <= _nextStap && _nextStap <= 3){
        for(var i = 0; i < 3 ; i++){
          if(otherBoard[_nextStap - 1] === ownBoard[i]){
            ownBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(ownBoard[0] === 0){
              this.setData({
                down11 : image
              })
            }
            if(ownBoard[1] === 0){
              this.setData({
                down12 : image
              })
            }
            if(ownBoard[2] === 0){
              this.setData({
                down13 : image
              })
            } 
          }
        }
      }
      //第二行
      if(4 <= _nextStap && _nextStap <= 6){
        for(var i = 3; i < 6 ; i++){
          if(otherBoard[_nextStap - 1] === ownBoard[i]){
            ownBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(ownBoard[3] === 0){
              this.setData({
                down21 : image
              })
            }
            if(ownBoard[4] === 0){
              this.setData({
                down22 : image
              })
            }
            if(ownBoard[5] === 0){
              this.setData({
                down23 : image
              })
            } 
          }
        }
      }
      //第三行
      if(7 <= _nextStap && _nextStap <= 9){
        for(var i = 6; i < 9 ; i++){
          if(otherBoard[_nextStap - 1] === ownBoard[i]){
            ownBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(ownBoard[6] === 0){
              this.setData({
                down31 : image
              })
            }
            if(ownBoard[7] === 0){
              this.setData({
                down32 : image
              })
            }
            if(ownBoard[8] === 0){
              this.setData({
                down33 : image
              })
            } 
          }
        }
      }
    }
    //玩家2回合
    if(turn === 2 && downState === 1){
      //第一行
      if(1 <= _nextStap && _nextStap <= 3){
        for(var i = 0; i < 3 ; i++){
          if(ownBoard[_nextStap - 1] === otherBoard[i]){
            otherBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(otherBoard[0] === 0){
              this.setData({
                top11 : image
              })
            }
            if(otherBoard[1] === 0){
              this.setData({
                top12 : image
              })
            }
            if(otherBoard[2] === 0){
              this.setData({
                top13 : image
              })
            } 
          }
        }
      }
      //第二行
      if(4 <= _nextStap && _nextStap <= 6){
        for(var i = 3; i < 6 ; i++){
          if(ownBoard[_nextStap - 1] === otherBoard[i]){
            otherBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(otherBoard[3] === 0){
              this.setData({
                top21 : image
              })
            }
            if(otherBoard[4] === 0){
              this.setData({
                top22 : image
              })
            }
            if(otherBoard[5] === 0){
              this.setData({
                top23 : image
              })
            } 
          }
        }
      }
      //第三行
      if(7 <= _nextStap && _nextStap <= 9){
        for(var i = 6; i < 9 ; i++){
          if(ownBoard[_nextStap - 1] === otherBoard[i]){
            otherBoard[i] = 0
            var image = this.fetchImgAddr(0)
            if(otherBoard[6] === 0){
              this.setData({
                top31 : image
              })
            }
            if(otherBoard[7] === 0){
              this.setData({
                top32 : image
              })
            }
            if(otherBoard[8] === 0){
              this.setData({
                to33 : image
              })
            } 
          }
        }
      }
    }
  },
   //AI1操作
   ai_Host1(){
    this.touClick()
    //  通过nextStap的算法计算出下一步的落点位置
    if(centreState === 0 && topState === 1 && turn === 1 && hosted1 === 1){
      console.log("调用了ai1")
      //调用函数，确定下一步走哪里
      //下一步的值
      var _nextStap = this.nextStap(ownBoard,otherBoard,figure)
      console.log("_nextStap " + _nextStap)
      // //调整为自己下完这一步后的棋盘,top棋盘的调整
      otherBoard[_nextStap] = figure
      this.ai_put_tou(_nextStap+1)
      this.ai_remove(_nextStap+1)
      console.log("ai_2_ownBoard" + ownBoard)
      console.log("ai_2_otherBoard" + otherBoard)
      this.topCount()
      this.downCount()
      this.end()
      centreState = 1
      topState = 0
      turn = 2
      this.setData({
        turn0:turn
      })
    }
  },
   //AI2操作
  ai_Host2(){
    this.touClick()
    //  通过nextStap的算法计算出下一步的落点位置
    if(centreState === 0 && downState === 1 && turn === 2 && hosted2 === 1){
      console.log("调用了ai2")
      // //调用函数，确定下一步走哪里
      //下一步的值
      var _nextStap = this.nextStap(ownBoard,otherBoard,figure)
      console.log("_nextStap " + _nextStap)
      // //调整为自己下完这一步后的棋盘，down棋盘的调整
      ownBoard[_nextStap-1] = figure
      this.ai_put_tou(_nextStap+1)
      this.ai_remove(_nextStap+1)
      console.log("ai_2_ownBoard" + ownBoard)
      console.log("ai_2_otherBoard" + otherBoard)
      this.topCount()
      this.downCount()
      this.end()
      centreState = 1
      downState = 0
      turn = 1
      this.setData({
        turn0:turn
      })
    }
    // 更新棋盘
  },
    /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    ownBoard = [0,0,0,0,0,0,0,0,0];
    otherBoard = [0,0,0,0,0,0,0,0,0];
    topScore =0 //玩家1总分
    downScore = 0 //玩家2总分
    var image = this.fetchImgAddr(0)
    this.setData({
      top11 : image,
      top12 : image,
      top13 : image,
      top21 : image,
      top22 : image,
      top23 : image,
      top31 : image,
      top32 : image,
      top33 : image,
      down11 : image,
      down12 : image,
      down13 : image,
      down21 : image,
      down22 : image,
      down23 : image,
      down31 : image,
      down32 : image,
      down33: image,
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    ownBoard = [0,0,0,0,0,0,0,0,0];
    otherBoard = [0,0,0,0,0,0,0,0,0];
    topScore =0 //玩家1总分
    downScore = 0 //玩家2总分
    var image = this.fetchImgAddr(0)
    this.setData({
      top11 : image,
      top12 : image,
      top13 : image,
      top21 : image,
      top22 : image,
      top23 : image,
      top31 : image,
      top32 : image,
      top33 : image,
      down11 : image,
      down12 : image,
      down13 : image,
      down21 : image,
      down22 : image,
      down23 : image,
      down31 : image,
      down32 : image,
      down33: image,
    })
  },
})