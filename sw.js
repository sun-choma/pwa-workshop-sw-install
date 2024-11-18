self.addEventListener('install', async (event) => {
    const cacheStorage = await caches.open("cache-v1");

    // Adding index page to cache
    // index.htmlをキャシュに追加する
    await cacheStorage.add("/");

    // Adding mock ToDo list response to cache
    // 仮ToDoリストをキャシュに追加する
    await cacheStorage.put("/todo/list", new Response([
        {id: 1, title: "Lorem Ipsum"},
        {id: 2, title: "Dolor Sit Amet"},
    ]));
})