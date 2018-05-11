# Axios

- axios.get(url[,config\])
- axios.delete(url[,config\])
- axios.post(url[,data\[,config\]\])
- axios.put(url[,data\[,config\]\])
- axios.head(url[,config\])
- axios.options(url[,config\])

```javascript
// 데이터가 필요 없는 경우, get,delete
axios.get('/api/contacts',{
  params : { data }
}).then((res)=>{
  console.log(`response : ${res}`)
}).catch((e)=>{
  console.log(`error ${e}`)
})
```

```javascript
// 데이터를 넣어줘야하는 경우
axios.post('/api/contacts',{
  name : "name",
  tel : "tel",
  address : "address"
}).then((res)=>{
  console.log(`response : ${res}`)
}).catch((e)=>{
  console.log(`error ${e}`)
})

```
### Axios 응답

- config : 요청시 config옵션 정보
- headers : 응답 헤더 정보
- request : XMLHttpRequest 객체 정보
- status : HTTP 상태코드
- statusText : 서버 상태를 나타내는 문자열 정보

### 파일 업로드

```html
<form method="post" enctype="multipart/form-data" action="주소">
    <input type="file" ref="photofile" name="photo">
  </form>
```

```javascript
axios.post('/api/contacts',data).then((res)=>{
  console.log(`response : ${res}`)
}).catch((e)=>{
  console.log(`error ${e}`)
})
```
