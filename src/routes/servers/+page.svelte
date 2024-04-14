<script lang="ts">
    import type { Server } from "$lib/db/schema";

    /** @type {import('./$types').PageServerData} */
    export let data: Server[];
</script>

<div>
    <ul>
        {#each data as server}
            <li>{server.name}</li>
        {/each}
    </ul>
</div>
