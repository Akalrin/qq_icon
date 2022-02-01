<script lang="ts">
import { defineComponent} from 'vue'
import { add, Mime} from "./add" 
import { invoke } from '@tauri-apps/api/tauri'
export default defineComponent({
	name: 'HelloWrold',
	components: {},
	props: {
		msg:String
	},
	data() {
		console.log(this.$props);
		return {
			count: <Mime> {
				hello:10,
			},
			url: <String|null>null,
			Getid: null// it is a v-model
		}
	},
	methods: {
		updateData() {
			add(this.count);
			console.log("ssss");
		},
		cove() {
			//const invoke = window.__TAURI__.invoke
			invoke('my_command', { message: 'Hello!' });
			console.log("ssss");
		},
		updateId () {
			this.url = "https://q1.qlogo.cn/g?b=qq&s=140&nk="+this.Getid;
		}
	}
})
</script>

<template>
  <h1>{{ msg }}</h1>
	<p>
		<strong>id:</strong>
		<input
			v-model="Getid"
			id="qq"
			placeholder="Eg 123456789"
		/> 
		<button type="button" @click="updateId">confirm</button>
	</p>
  <button type="button" @click="updateData">count is: {{ count.hello }}</button>
  <button type="button" @click="cove">cove</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
	<p>
	<img v-if="url!=null" :src="url" alt="Girl in a jacket" width="500" height="600">

	</p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
