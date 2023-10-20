import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}> Order by: Relevance</MenuButton>
            <MenuList>
                {/* {data.map(platform => <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)} */}
            </MenuList>
        </Menu>
    )
}

export default SortSelector