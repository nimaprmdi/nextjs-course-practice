import React from "react";
import Link from "next/link";

const Clients = () => {
    const client = [{ id: 1, pathName: "/clients/[id]" }];
    return (
        <div>
            ClientsMainPage
            <Link href="/clients/max">Client Max</Link>
            <br />
            <Link
                href={{
                    pathname: "/clients/[id]",
                    query: { id: "1" },
                }}
            >
                11111
            </Link>
            <br />
            <Link
                href={{
                    pathname: client[0].pathName,
                    query: { id: client[0].id },
                }}
            >
                222222
            </Link>
        </div>
    );
};

export default Clients;
