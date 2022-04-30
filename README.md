# 2022 GDSC Winter Hack : 💰GreenMoney💰

[발표자료](가그린_발표자료.pdf)

### 📌 About our Team 
> Team 20 가그린 
> 
> Member : [강수아(팀장)](https://github.com/rkdtndk99), [김영경](https://github.com/kelly1422), [최정재](https://github.com/jungjaechoi), [이재민](https://github.com/coperates) 

### 📌 Development Environment 
>  **Front-end** : Android Studio 2021.1.1
> - Java version : 15.0.2
> - compileSDKversion : 30
> - minSdkVersion : 21
> 
> **Back-end** : Node.js & MongoDB
> - node version : 14.17.3
> - Delpoy : GCP & MongoDB Atlas

</br>

## 💡 Introduction
양질의 교육(Quality Education)과 기후 변화 대응(Climate Action)에 대한 지역•사회 문제를 해결하고자 `GreenMoney`를 기획하고 개발하게 되었습니다. 경제 관념과 환경을 위한 행동이 자연스럽게 아이들의 삶에 스며들 수 있도록 제작하였습니다. 

강제적으로 분리수거, 청소 등을 시키는 것이 아니라 **용돈** 보상과 동기부여가 되는 **꽃 나무**로 보다 쉽게 아이들이 환경을 살릴 수 있는 행동들을 생각하고 실천할 수 있도록 도와주는 앱입니다. 


## 💡 Details 
### 👪 All
- 메인 페이지에는 완료한 미션에 따라 꽃이 생기는 동기부여를 위한 **꽃 나무**가 있음 
- 성적표를 클릭하면 한 달동안 아이가 완료한 **미션**과 지금까지 획득한 **용돈**을 보여줌
- 각 Month를 선택하면, 해당 달에 한 미션의 리스트를 보여줌 
### 💑 Parent 
- 아이가 인증 요청한 미션을 보고, 인증해줄 수 있음 
### 👶 Child 
- 미션을 수행한 뒤에 부모님께 인증 요청 가능 


## 💡 Demo
### Join Page
<img width="381" alt="join" src="https://user-images.githubusercontent.com/86420940/152622420-a4c1bcc4-6b95-48bc-837b-828d67b09ffc.png">

### Login Page

<img width="381" alt="login" src="https://user-images.githubusercontent.com/86420940/152622254-2f1d8429-60ec-4a51-b928-141e5ee0c4b0.png">

- login 성공 시 jwt token 발급

### Main Page

<img width="381" alt="main" src="https://user-images.githubusercontent.com/86420940/152622257-22000d5c-a3f5-4259-8dc9-81bad23da2c5.png">

- mission을 완료할 때마다 나무에 꽃이 열린다

### AllMission Page

<img width="381" alt="allMission" src="https://user-images.githubusercontent.com/86420940/152622233-6ccc1c12-0ab1-472a-90e7-86adf6d88e36.png">

- 월별로 달성한 미션과 획득한 용돈정보를 표시해준다.

### Setting Page

<img width="381" alt="settings" src="https://user-images.githubusercontent.com/86420940/152622213-55faba6d-348b-46e2-8c68-abffcb43a555.png">

- maxMoney, paymentDate, connectedEmail, password, phonenumber 를 수정할 수 있는 페이지이다.  







</br>

## ⚙ Technical Features 
- JWT Token 사용해서 보안 강화 
- GCP로 NodeJS 배포로 `Google` 기술 사용 
- MongoDB Atlas 사용해서 DB도 배포 
