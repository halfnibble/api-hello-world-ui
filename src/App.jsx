import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppShell, Burger, Title, Table } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const App = () => {
    const [opened, { toggle }] = useDisclosure();
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3005/languages')
            .then((response) => {
                setLanguages(response.data);
            })
            .catch((error) => {
                console.error('Error fetching languages:', error);
            });
    });

    // Function to render table rows
    const rows = languages.map((row, index) => (
        <Table.Tr key={index}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.greeting}</Table.Td>
            <Table.Td>{row.pangram}</Table.Td>
            <Table.Td>{row.filler}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'sm',
                    collapsed: { mobile: !opened },
                }}
                padding='md'
            >
                <AppShell.Header>
                    <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
                    <Title order={1} style={{ marginLeft: '16px' }}>
                        Hello World API
                    </Title>
                </AppShell.Header>

                <AppShell.Navbar p='md'>
                    <Title order={2}>Languages</Title>
                </AppShell.Navbar>

                <AppShell.Main>
                    <Title order={2}>Languages List</Title>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>Name</Table.Th>
                                <Table.Th>Greeting</Table.Th>
                                <Table.Th>Pangram</Table.Th>
                                <Table.Th>Filler</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default App;
