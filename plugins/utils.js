export default (ctx, inject) => {
    inject('utils', {
        formatToDate(seconds) {
            if (!Number.isFinite(seconds) || seconds < 0) {
                throw new Error('Invalid argument')
            }

            const minutes = seconds / 60
            const mm = Math.floor(minutes)
            const ss = Math.round((minutes % 1) * 60)

            // eslint-disable-next-line prettier/prettier
            return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`
        }
    })
}
