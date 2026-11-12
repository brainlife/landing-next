'use client';

import React from 'react';
import NextLink from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChakraProvider from '@/components/ChakraProvider';
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Text,
    Badge,
    SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    ArrowUpRight,
    BookOpen,
    Compass,
    Database,
    Cpu,
    Layers,
    LifeBuoy,
} from 'lucide-react';
import { EXTERNAL_LINKS } from '@/lib/constants';

const MotionBox = motion.create(Box);

const QUICK_LINKS = [
    {
        title: 'Explore Datasets',
        desc: 'Access open-access neuroimaging datasets and BIDS-standard archives.',
        href: EXTERNAL_LINKS.DATASETS,
        isExternal: true,
        icon: Database,
        badge: 'Open Data',
    },
    {
        title: 'Compute Apps',
        desc: 'Over 200+ containerized pipelines for dMRI, sMRI, fMRI, and EEG.',
        href: EXTERNAL_LINKS.APPS,
        isExternal: true,
        icon: Cpu,
        badge: 'Pipelines',
    },
    {
        title: 'ezBIDS Tool',
        desc: 'Automated DICOM to BIDS converter directly within your browser.',
        href: EXTERNAL_LINKS.EZBIDS,
        isExternal: true,
        icon: Layers,
        badge: 'Utility',
    },
    {
        title: 'Help & Documentation',
        desc: 'Tutorials, CLI guides, datatypes reference, and developer docs.',
        href: EXTERNAL_LINKS.DOCS,
        isExternal: true,
        icon: LifeBuoy,
        badge: 'Docs',
    },
];

function NotFoundContent() {
    return (
        <Box
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            bg="#080e1c"
            color="white"
            position="relative"
            overflow="hidden"
        >
            <title>404 - Page Not Found | Brainlife.io</title>

            {/* Ambient Background Glows */}
            <Box
                position="absolute"
                top="-150px"
                left="50%"
                transform="translateX(-50%)"
                w="900px"
                h="600px"
                borderRadius="full"
                bg="radial-gradient(ellipse at center, rgba(38, 147, 216, 0.15) 0%, rgba(92, 197, 216, 0.05) 40%, transparent 70%)"
                pointerEvents="none"
                zIndex={0}
            />
            <Box
                position="absolute"
                bottom="10%"
                right="-100px"
                w="600px"
                h="600px"
                borderRadius="full"
                bg="radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)"
                pointerEvents="none"
                zIndex={0}
            />

            {/* Navigation Header */}
            <Navbar />

            {/* Main Stage */}
            <Box
                as="main"
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                pt={{ base: '130px', md: '160px' }}
                pb={{ base: '80px', md: '120px' }}
                position="relative"
                zIndex={1}
            >
                <Container maxW="1100px" px={{ base: '20px', md: '32px' }} textAlign="center">
                    {/* Big 404 Number with gradient and subtle glow */}
                    <MotionBox
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        position="relative"
                        mb="16px"
                    >
                        <Heading
                            as="h1"
                            fontSize={{ base: '90px', sm: '130px', md: '170px' }}
                            fontWeight={900}
                            lineHeight={1}
                            letterSpacing="-0.04em"
                            fontFamily="'Work Sans', sans-serif"
                            bgGradient="linear(to-b, #ffffff 30%, #5cc5d8 75%, #2693D8 100%)"
                            bgClip="text"
                            textShadow="0 0 80px rgba(38, 147, 216, 0.35)"
                        >
                            404
                        </Heading>
                    </MotionBox>

                    {/* Headline and Description */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        maxW="680px"
                        mx="auto"
                        mb="40px"
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: '26px', sm: '32px', md: '38px' }}
                            fontWeight={800}
                            letterSpacing="-0.02em"
                            mb="16px"
                            fontFamily="'Work Sans', sans-serif"
                            color="#ffffff"
                        >
                            Lost in the Connectome
                        </Heading>
                        <Text
                            fontSize={{ base: '15px', md: '17px' }}
                            lineHeight="1.65"
                            color="rgba(255, 255, 255, 0.72)"
                        >
                            The brain coordinate, dataset, or page you requested could not be
                            resolved in the Brainlife network. It may have moved, expired, or been
                            re-indexed.
                        </Text>
                    </MotionBox>

                    {/* Primary Action Buttons */}
                    <MotionBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        mb="70px"
                    >
                        <Flex
                            direction={{ base: 'column', sm: 'row' }}
                            align="center"
                            justify="center"
                            gap="16px"
                        >
                            <Button
                                as={NextLink}
                                href="/"
                                px="28px"
                                py="12px"
                                h="48px"
                                borderRadius="8px"
                                bg="#2693D8"
                                color="white"
                                fontSize="14px"
                                fontWeight={700}
                                fontFamily="'Work Sans', sans-serif"
                                letterSpacing="0.04em"
                                leftIcon={<ArrowLeft size={16} />}
                                transition="all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                                _hover={{
                                    bg: '#1c7bb9',
                                    boxShadow: '0 0 25px rgba(38, 147, 216, 0.55)',
                                    transform: 'translateY(-2px)',
                                    textDecoration: 'none',
                                }}
                                _active={{ transform: 'scale(0.98)' }}
                            >
                                Return to Home
                            </Button>

                            <Button
                                as="a"
                                href={EXTERNAL_LINKS.PORTAL}
                                target="_blank"
                                rel="noopener noreferrer"
                                px="24px"
                                py="12px"
                                h="48px"
                                borderRadius="8px"
                                bg="rgba(255, 255, 255, 0.06)"
                                border="1px solid rgba(255, 255, 255, 0.2)"
                                color="white"
                                fontSize="14px"
                                fontWeight={700}
                                fontFamily="'Work Sans', sans-serif"
                                letterSpacing="0.04em"
                                rightIcon={<ArrowUpRight size={16} />}
                                transition="all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                                _hover={{
                                    bg: 'rgba(255, 255, 255, 0.12)',
                                    borderColor: 'rgba(255, 255, 255, 0.4)',
                                    transform: 'translateY(-2px)',
                                    textDecoration: 'none',
                                }}
                                _active={{ transform: 'scale(0.98)' }}
                            >
                                Launch Portal
                            </Button>

                            <Button
                                as="a"
                                href={EXTERNAL_LINKS.DOCS}
                                target="_blank"
                                rel="noopener noreferrer"
                                px="24px"
                                py="12px"
                                h="48px"
                                borderRadius="8px"
                                bg="rgba(255, 255, 255, 0.06)"
                                border="1px solid rgba(255, 255, 255, 0.2)"
                                color="white"
                                fontSize="14px"
                                fontWeight={700}
                                fontFamily="'Work Sans', sans-serif"
                                letterSpacing="0.04em"
                                leftIcon={<BookOpen size={16} />}
                                transition="all 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                                _hover={{
                                    bg: 'rgba(255, 255, 255, 0.12)',
                                    borderColor: 'rgba(255, 255, 255, 0.4)',
                                    transform: 'translateY(-2px)',
                                    textDecoration: 'none',
                                }}
                                _active={{ transform: 'scale(0.98)' }}
                            >
                                Documentation
                            </Button>
                        </Flex>
                    </MotionBox>

                    {/* Quick Hub Directory */}
                    <MotionBox
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        maxW="980px"
                        mx="auto"
                        textAlign="left"
                    >
                        <Flex align="center" gap="10px" mb="20px">
                            <Compass size={18} color="#5cc5d8" />
                            <Text
                                fontSize="13px"
                                fontWeight={800}
                                letterSpacing="0.08em"
                                textTransform="uppercase"
                                color="rgba(255, 255, 255, 0.6)"
                                fontFamily="'Work Sans', sans-serif"
                            >
                                Suggested Destinations
                            </Text>
                        </Flex>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="16px">
                            {QUICK_LINKS.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <Box
                                        key={link.title}
                                        as={link.isExternal ? 'a' : NextLink}
                                        href={link.href}
                                        target={link.isExternal ? '_blank' : undefined}
                                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                                        p="20px"
                                        borderRadius="12px"
                                        bg="rgba(15, 23, 42, 0.6)"
                                        border="1px solid rgba(255, 255, 255, 0.08)"
                                        backdropFilter="blur(16px)"
                                        transition="all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="space-between"
                                        cursor="pointer"
                                        textDecoration="none !important"
                                        role="group"
                                        _hover={{
                                            bg: 'rgba(21, 32, 58, 0.85)',
                                            borderColor: 'rgba(92, 197, 216, 0.4)',
                                            transform: 'translateY(-3px)',
                                            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
                                        }}
                                    >
                                        <Box>
                                            <Flex justify="space-between" align="center" mb="12px">
                                                <Box
                                                    w="36px"
                                                    h="36px"
                                                    borderRadius="8px"
                                                    bg="rgba(38, 147, 216, 0.15)"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    color="#5cc5d8"
                                                    transition="transform 0.2s ease"
                                                    _groupHover={{ transform: 'scale(1.08)' }}
                                                >
                                                    <IconComponent size={18} />
                                                </Box>
                                                <Badge
                                                    bg="rgba(255, 255, 255, 0.06)"
                                                    color="rgba(255, 255, 255, 0.7)"
                                                    fontSize="11px"
                                                    fontWeight={600}
                                                    px="8px"
                                                    py="2px"
                                                    borderRadius="4px"
                                                    letterSpacing="0.04em"
                                                >
                                                    {link.badge}
                                                </Badge>
                                            </Flex>
                                            <Heading
                                                as="h3"
                                                fontSize="16px"
                                                fontWeight={700}
                                                fontFamily="'Work Sans', sans-serif"
                                                color="#ffffff"
                                                mb="6px"
                                                display="flex"
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                {link.title}
                                                {link.isExternal && (
                                                    <ArrowUpRight
                                                        size={14}
                                                        style={{
                                                            opacity: 0.4,
                                                            transition: 'opacity 0.2s',
                                                        }}
                                                    />
                                                )}
                                            </Heading>
                                            <Text
                                                fontSize="13px"
                                                lineHeight="1.55"
                                                color="rgba(255, 255, 255, 0.6)"
                                            >
                                                {link.desc}
                                            </Text>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </SimpleGrid>
                    </MotionBox>

                </Container>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
}

export default function NotFound() {
    return (
        <ChakraProvider>
            <NotFoundContent />
        </ChakraProvider>
    );
}
