const localiseData = (data, localeIso) => {
    return data.filter(({ node_locale }) => node_locale === localeIso);
};

export default localiseData;
