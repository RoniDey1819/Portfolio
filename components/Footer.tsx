const Footer = () => {
    return (
        <footer className="text-center py-20 border-t border-white/5" id="footer">
            <div className="container">
                <div className="flex flex-col items-center gap-4">
                    <p className="text-white/40 text-sm font-roboto-flex">
                        © {new Date().getFullYear()} Roni Dey. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
