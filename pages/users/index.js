
import Link from 'next/link';
import React from 'react';

const index = ({ users }) => {

    return (
        <div>
            <h2>This is users page: {users.length} </h2>

            {
                users.map(user => <div key={user.id}>
                    <h4>users name: {user.name} </h4>
                    <p>users email: {user.email} </p>
                    <Link href={`/users/${user.id}`}>
                        <a>Explore</a>
                    </Link>
                </div>)
            }

        </div>
    );
};

export default index;

// data load:
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: {users}
    }
}