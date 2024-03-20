import fs from 'fs';
import path from 'path';

export default function DeleteAccount({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
    const html = fs.readFileSync(path.join(process.cwd(), 'public', 'delete-account.html'), 'utf8');
    return { props: { html } };
}