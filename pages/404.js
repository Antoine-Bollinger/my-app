import Layout from "../components/Layout";
import Link from 'next/link'

export default function FourOhFour() {
    return (
        <Layout>
            <div className="w-full h-full">
                <h1>404 - Page Not Found</h1>
                <Link href="/">
                    <a>
                        Go back home
                    </a>
                </Link>
            </div>
        </Layout>
    )
}