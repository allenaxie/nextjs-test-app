import Link from 'next/link';
import { Fragment } from 'react';

export default function NewsPage () {
    return (
        <Fragment>
        News Page
        <ul>
            <li>
                <Link href="/news/1">
                    NextJS is greattttt!
                </Link>
            </li>
            <li>
                <Link href="/news/2">
                    NextJS is mehhhhh!
                </Link>
            </li>
            <li>
                <Link href="/news/3">
                    NextJS is blahhhhh!
                </Link>
            </li>
        </ul>
        </Fragment>
    )
}