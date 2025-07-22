import sys
import spacy

nlp = spacy.load("en_core_web_sm")

def simplify(text):
    doc = nlp(text)
    simplified = []
    for sent in doc.sents:
        if len(sent) > 15:
            simplified.append(sent.text[:100] + '...')  # truncate long sentences
        else:
            simplified.append(sent.text)
    return "\n".join(simplified)

if __name__ == "__main__":
    file_path = sys.argv[1]
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        print(simplify(content))
