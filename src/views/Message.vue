<template>
  <div class="content container-fluid message">
    <div class="row justify-content-center message-title">
      <h1>Message me</h1>
    </div>

    <div class="d-flex justify-content-center">
      <div class="col-sm-8">
        <form class="d-flex flex-column align-items-center message-input">
          <h2>Message with me</h2>
          <input
            type="text"
            class="form-control col-sm-10"
            placeholder="input your email"
          />
          <textarea
            class="form-control col-sm-10"
            id="formControlTextarea1"
            rows="3"
            placeholder="input your message"
          ></textarea>
          <button type="submit" class="input-btn">submit</button>
        </form>

        <ul class="message-content">
          <li>
            <div class="d-flex justify-content-between user-info">
              <div class="user">972349576@qq.com</div>
              <div class="time">2018/6/26 12:35</div>
            </div>
            <div class="user-message">hello,everyone</div>
          </li>
          <li>
            <div class="d-flex justify-content-between user-info">
              <div class="user">972349576@qq.com</div>
              <div class="time">2018/6/26 12:35</div>
            </div>
            <div class="user-message">hello,everyone</div>
          </li>
          <li>
            <div class="d-flex justify-content-between user-info">
              <div class="user">972349576@qq.com</div>
              <div class="time">2018/6/26 12:35</div>
            </div>
            <div class="user-message">hello,everyone</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang='less'>
@import '../assets/css/message.less';
</style>
