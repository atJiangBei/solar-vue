# toast

<ClientOnly>
<sv-toast/>
</ClientOnly>

```javascript
import { Toast } from 'solar-vue'
Vue.component(Toast.name, Toast)
/*
or
Vue.use(Icon)
*/

//*.vue
this.$toast({
  type: 'loading',
  loadingType: 'circle',
  message: '加载中'
})
```

```vue
<template>
  <sv-toast v-model="value">很高兴看到你</sv-toast>
</template>
<script>
export default { components: { [Toast.name]: Toast } }
</script>
```

<ClientOnly>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value| v-model绑定,弹框出现 | boolean |- | false |
| type | 弹框类型 | string | loading-icon | success |
| loadingType | loading类型 | string | - | - |
| icon | icon类型 | string | - | - |
| message | 文字内容 | string | - | - |
| duration | 弹框出现的时长 | number | - | 2000 |
</ClientOnly>