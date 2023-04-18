import React from 'react'
import Hero from '../AppComponents/SharedComponents/Hero'
import Banner from '../AppComponents/SharedComponents/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <Hero>
            <Banner title="Error 404" subtitle="page not found">
                <Link to="/" className="btn-primary">
                    Inicio
                </Link>
            </Banner>
            <div>
                es como poesia esta basura
            </div>
        </Hero>
    )
}
