<script lang="ts">
    import { onMount } from "svelte";

    let searchInput;
    let searchableDocs;
    let searchIndex;

    const urlParams = new URLSearchParams(window.location.search);
    let searchQuery = urlParams.has("query");
    let searchResults = [];

    onMount(async () => {
        const lunr = (await import("lunr")).default;
        const resp = await fetch("/search-index.json");
        searchableDocs = await resp.json();

        // Initialize indexing
        searchIndex = lunr(function () {
            // the match key...
            this.ref("slug");
            // indexable properties
            this.field("title");
            this.field("description");
            this.field("tags");
            this.field("category");
            // Omit, if you don't want to search on `body`
            this.field("body");
            // Index every document
            searchableDocs.forEach((doc) => {
                this.add(doc);
            }, this);
        });
        searchInput.focus();
    });

    $: {
        if (searchQuery && searchQuery.length >= 3) {
            const matches = searchIndex.search(searchQuery);
            searchResults = [];
            matches.map((match) => {
                searchableDocs.filter((doc) => {
                    if (match.ref === doc.slug) {
                        searchResults.push(doc);
                    }
                });
            });
        }
    }
</script>

<div>
    <div class="search__results">
        {searchQuery}

        {#if searchResults.length}
            {#each searchResults as post, i}
                <div class="post-preview hover:bg-purple-600">
                    <div class="flex-1">
                        <h4 class="post-preview__title">
                            <a
                                href={`/${post.category}/${post.slug}`}
                                title={post.title}>{post.title} &rarr;</a
                            >
                        </h4>
                        <p class="post-preview__desc">
                            {post.description}
                        </p>

                        <ul class="tag-list">
                            {#each post.tags as tag}
                                <a class="tag" href={`/tags/${tag}`} title={tag}
                                    >{tag}</a
                                >
                            {/each}
                        </ul>
                    </div>
                </div>
            {/each}
        {:else}
            <div>
                {#if searchQuery.length}
                    No matching items found!
                {:else}
                    <!-- Search something and let me find it for you! :-) -->
                {/if}
            </div>
        {/if}
    </div>
</div>
