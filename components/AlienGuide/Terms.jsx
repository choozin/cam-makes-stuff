import { useState, useEffect, useContext } from 'react'

import { motion } from 'framer-motion'

const Terms = ({ term, buttons }) => {

    switch (term) {
        case: 'Introduction':
            return (
                <div>
                    <div>
                        This is the introduction.
                    </div>
                    <div>
                        {buttons}
                    </div>
                </div>
            );
    }
}

export default Guide;