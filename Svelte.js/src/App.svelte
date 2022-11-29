<script lang="ts">
    import { text } from "svelte/internal";

    function remove(id:number){
		posts = posts.filter(post => post.id !=id)
	}
	function removeAll(){
		posts = []
	}

	type Post = {
		userId: number,
        id: number,
        title: string,
        body: string
	}
	let posts:Post[] = []
	let promise: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/posts')
		promise 
		         .then(res => res.text())
				 .then(text => {
					const array = JSON.parse(text)
					posts = array
				 })

</script>

<h1>Posts</h1>
<div class="d-flex gap-2 flex-wrap">
	{#each posts as item }
    
	<div class="card m-2 " style="width:250px ;">
		<div class="card-body">
			<h3>{item.id}:{item.title}</h3>
			<p>{item.body}</p>
			<button on:click={()=> remove(item.id)} class="btn btn-primary">Delete</button>
		</div>
	</div>
	{/each}
	<button on:click={removeAll} class="btnass">Delete all</button>
</div>

