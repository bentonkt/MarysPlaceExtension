import os
from docx import Document

# def docx_to_txt(docx_path):
#     doc = Document(docx_path)
#     result = []
#     for para in doc.paragraphs:
#         result.append(para.text)
#     return '\n'.join(result)

directory = "C:\\Users\\bento\\OneDrive\\Desktop\\Stuff\\Coding\\MarysPlaceExtension\\LessonPlans"  # Replace with the path to your directory

# for filename in os.listdir(directory):
#     if filename.endswith(".docx"):
#         file_path = os.path.join(directory, filename)
#         content = docx_to_txt(file_path)
#         with open(os.path.join(directory, filename.replace(".docx", ".txt")), "w", encoding="utf-8") as txt_file:
#             txt_file.write(content)


os.chdir(directory)

# for filename in os.listdir(directory):
#     if filename.endswith(".docx"):
#         os.remove(filename)
print(os.listdir(directory))

for filename in os.listdir(directory):
    print("\"" + filename + "\",\n")