'use client';

import React, { useEffect, useRef } from 'react';
import NextLink from 'next/link';
import SiteHeader from '@/features/LandingV3/components/SiteHeader';
import SiteFooter from '@/features/LandingV3/components/SiteFooter';
import { D } from '@/lib/landing/draw';
import { PICK_SCRIPT } from '@/lib/landing/pairs';
import '@/features/LandingV3/landing-v3.css';

export default function NotFound() {
    const bgRef = useRef<HTMLDivElement>(null);

    // Paints the generative stream field background from the landing hero
    useEffect(() => {
        const el = bgRef.current;
        if (!el) return;

        const draw = () => {
            el.innerHTML = '';
            const layer = document.createElement('div');
            layer.style.cssText = 'position:absolute;inset:0';
            el.appendChild(layer);
            D.field(layer, el.clientWidth || 1180, el.clientHeight || 700, 2026, false);
        };

        draw();

        let t: ReturnType<typeof setTimeout> | undefined;
        let lastW = el.clientWidth;
        const ro = new ResizeObserver(() => {
            if (el.clientWidth === lastW) return;
            lastW = el.clientWidth;
            clearTimeout(t);
            t = setTimeout(draw, 200);
        });
        ro.observe(el);

        return () => {
            ro.disconnect();
            clearTimeout(t);
        };
    }, []);

    return (
        <div className="lv3 not-found-page">
            <title>404 - Page Not Found · brainlife.io</title>
            {/* Initializes hero pair and brand token choices before first paint */}
            <script dangerouslySetInnerHTML={{ __html: PICK_SCRIPT }} />

            {/* Hero Stage with D.field Background */}
            <header className="hero not-found-hero">
                <div className="bgart" ref={bgRef} />
                <div className="site-band">
                    <div className="wrap">
                        <SiteHeader />
                    </div>
                </div>

                <div className="wrap not-found-body">
                    <div className="copy">
                        <div className="ey">404 error</div>
                        <h1>Page not found</h1>
                        <p className="lede">
                            The link you followed may be broken or the page may have been removed.
                        </p>
                        <div className="cta">
                            <NextLink className="btn p" href="/about">
                                Back to home
                            </NextLink>
                            <NextLink className="btn" href="/about">
                                About page
                            </NextLink>
                        </div>
                    </div>
                </div>

                {/* 4-Color Brand Stripe */}
                <div className="stripe" />
            </header>

            {/* Site Footer */}
            <SiteFooter />

            <style jsx>{`
                .not-found-page {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    background: var(--hero, #07131c);
                }
                .not-found-hero {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                }
                .not-found-body {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-block: 60px 80px;
                    position: relative;
                    z-index: 2;
                    text-align: center;
                }
                .not-found-body .copy {
                    max-width: 580px;
                    margin-inline: auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .not-found-body .ey {
                    display: inline-block;
                    text-align: center;
                    margin-inline: auto;
                }
                .not-found-body h1 {
                    font-size: clamp(2.4rem, 5vw, 4rem);
                    font-weight: 800;
                    letter-spacing: -0.03em;
                    line-height: 1.1;
                    margin-top: 14px;
                    color: var(--hero-ink, #eef3f6);
                    text-align: center;
                }
                .not-found-body .lede {
                    font-size: clamp(1rem, 1.8vw, 1.15rem);
                    line-height: 1.5;
                    margin-top: 14px;
                    color: var(--hero-muted, #a9bac6);
                    text-align: center;
                    max-width: 480px;
                    margin-inline: auto;
                }
                .not-found-body .cta {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    margin-top: 24px;
                    flex-wrap: wrap;
                }
                @media (max-width: 760px) {
                    .not-found-body {
                        padding-block: 40px 60px;
                    }
                }
            `}</style>
        </div>
    );
}
