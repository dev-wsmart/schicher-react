
const languages = [
    { code: 'en', name: 'English'},
    { code: 'th', name: 'Thai'}
]

const translation = {
    'en': {
        'hello': 'hello world'
    },
    'th': {
        'hello': 'สวัสดีชาวโลก'
    }
}

export default function getTranslation(lang, text) {
    return translation[lang][text];
}