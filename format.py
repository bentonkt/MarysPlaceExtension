import os

src = 'C:\\Users\\bento\\OneDrive\\Desktop\\Stuff\\Coding\\MarysPlaceExtension\\lessons\\'
os.chdir(src)
for dir in os.listdir('.'):
    title = dir
    if " Lesson Plan - KidzCoding" in title:
        title = title.replace(" Lesson Plan - KidzCoding", "")
        os.rename(dir, title)
    os.chdir(title)
    for file in os.listdir('./'):
        if file.endswith(".html"):
            os.rename(file, "index.html")
    os.chdir(src)

