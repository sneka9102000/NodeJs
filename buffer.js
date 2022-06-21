const buffer = Buffer.alloc(10);

//10 bytes of 00


buffer.write("Hello", "utf-8")

buffer.toString("utf-8", 0, 12)

//'Hello World'