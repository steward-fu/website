/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
 typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

  function Brush() {
    var my_constant = 'UART2_BASE APB2_CFG_REG PLL_PERIPH0_CTRL_REG BUS_CLK_GATING_REG3 BUS_SOFT_RST_REG4 PG THR LSR CPU_AXI_CFG_REG PG_CFG1 PS_SOLID gdi32.dll gdi WM_PAINT SB_LINEUP SB_LINELEFT SB_LINEDOWN SB_LINERIGHT SB_PAGEUP SB_PAGELEFT SB_PAGEDOWN SB_PAGERIGHT SB_VERT WM_VSCROLL WS_VSCROLL WM_MOUSEMOVE w.hhf args.hhf memory.hhf WM_TIMER strings.hhf ARG1 ARG2 ARG3 ARG4 WM_KEYDOWN WM_SYSKEYDOWN WS_OVERLAPPED WS_CAPTION WS_SYSMENU WS_THICKFRAME WS_MINIMIZEBOX WS_MAXIMIZEBOX SIZE subsystem:windows user32.dll kernel32.dll user kernel SW_SHOWNORMAL GWL_WNDPROC WM_CLOSE WM_DESTROY WS_OVERLAPPEDWINDOW WS_VISIBLE WS_EX_LEFT WC_DIALOG SW_SHOWDEFAULT PTE DDRE POCR PTA DDRA CONFIG CCU PRCM PIO R_PIO PL_CFG0 PRCM_APB0_GATE PRCM_APB0_RESET PRCM_SEC_SWITCH PL_CFG1 PL_DATA PL_PUL0 PA_CFG1 PA_DATA PG_PUL0 PG_CFG0 PG_DATA PC_CFG0 PC_DAT PC_PULL0 PD_CFG2 PD_DAT RSTSTAT WDTCTL_REG WDTLMT_REG T1CTL_REG T1LMT_REG CLKCFG0 TGLB_REG T0CTL_REG T0LMT_REG SYSCFG0 DYN_CFG0 GPIO1_MODE GPIO_CTRL_1 GPIO_DATA_1 WDT_MODE GPIOB_BASE GPIO_ISTAT RCU_BASE RCU_CFG0 RCU_APB2EN GPIO_CTL0 GPIO_CTL1 GPIO_OCTL MAX_SEMA_COUNT MAX_SEMA_LIMIT MSG_ACQUIRING MSG_ACQUIRED MSG_RELEASING MSG_RELEASED MSG_SLEEPING MSG_SETEVENT MSG_WAITING MSG_COMPLETE NotificationEvent IOCTL_START IOCTL_STOP DEV_NAME MSG_LOCKING MSG_LOCKED MSG_UNLOCKING MSG_UNLOCKED SYM_NAME MAX_THREAD TCON_CTRL_REG TCON_INT_REG0 TCON_INT_REG1 TCON_FRM_CTRL_REG TCON_FRM_SEED0_R_REG TCON_FRM_SEED0_G_REG TCON_FRM_SEED0_B_REG TCON_FRM_SEED1_R_REG TCON_FRM_SEED1_G_REG TCON_FRM_SEED1_B_REG TCON_FRM_TBL_REG0 TCON_FRM_TBL_REG1 TCON_FRM_TBL_REG2 TCON_FRM_TBL_REG3 TCON0_CTRL_REG TCON_CLK_CTRL_REG TCON0_BASIC_TIMING_REG0 TCON0_BASIC_TIMING_REG1 TCON0_BASIC_TIMING_REG2 TCON0_BASIC_TIMING_REG3 TCON0_HV_TIMING_REG TCON0_CPU_IF_REG TCON0_CPU_WR_REG TCON0_CPU_RD_REG TCON0_CPU_RD_NX_REG TCON0_IO_CTRL_REG0 TCON0_IO_CTRL_REG1 TCON1_CTRL_REG TCON1_BASIC_REG0 TCON1_BASIC_REG1 TCON1_BASIC_REG2 TCON1_BASIC_REG3 TCON1_BASIC_REG4 TCON1_BASIC_REG5 TCON1_IO_CTRL_REG0 TCON1_IO_CTRL_REG1 TCON_DEBUG_INFO_REG  DEBE_MODE_CTRL_REG DEBE_COLOR_CTRL_REG DEBE_DISP_SIZE_REG DEBE_LAY0_SIZE_REG DEBE_LAY1_SIZE_REG DEBE_LAY2_SIZE_REG DEBE_LAY3_SIZE_REG DEBE_LAY0_CODNT_REG DEBE_LAY1_CODNT_REG DEBE_LAY2_CODNT_REG DEBE_LAY3_CODNT_REG DEBE_LAY0_LINEWIDTH_REG DEBE_LAY1_LINEWIDTH_REG DEBE_LAY2_LINEWIDTH_REG DEBE_LAY3_LINEWIDTH_REG DEBE_LAY0_FB_ADDR_REG DEBE_LAY1_FB_ADDR_REG DEBE_LAY2_FB_ADDR_REG DEBE_LAY3_FB_ADDR_REG DEBE_LAY0_FB_HI_ADDR_REG DEBE_LAY1_FB_HI_ADDR_REG DEBE_LAY2_FB_HI_ADDR_REG DEBE_LAY3_FB_HI_ADDR_REG DEBE_REGBUFF_CTRL_REG DEBE_LAY0_ATT_CTRL_REG0 DEBE_LAY1_ATT_CTRL_REG0 DEBE_LAY2_ATT_CTRL_REG0 DEBE_LAY3_ATT_CTRL_REG0 DEBE_LAY0_ATT_CTRL_REG1 DEBE_LAY1_ATT_CTRL_REG1 DEBE_LAY2_ATT_CTRL_REG1 DEBE_LAY3_ATT_CTRL_REG1  XRES YRES V_FRONT_PORCH V_BACK_PORCH V_SYNC_LEN H_SYNC_LEN H_BACK_PORCH H_FRONT_PORCH VRAM_PHYS PLL_VIDEO_CTRL_REG BUS_CLK_GATING_REG1 BUS_SOFT_RST_REG1 BE_CLK_REG FE_CLK_REG TCON_CLK_REG TCON_BASE DEBE_BASE TP_BASE TP_CTRL_REG0 TP_CTRL_REG1 TP_CTRL_REG2 TP_CTRL_REG3 TP_INT_FIFO_CTRL_REG TP_INT_FIFO_STAT_REG TP_COM_DATA_REG TP_DATA_REG CMD_PAGE_PROGRAM CMD_WRIRE_ENABLE CMD_WRITE_DISABLE CMD_READ_STATUS_R1 CMD_READ_STATUS_R2 CMD_READ_DATA CMD_FAST_READ CMD_SECTOR_ERASE CMD_CHIP_ERASE CMD_READ_UNIQUE_ID CMD_JEDEC_ID SPI_GCR SPI_TCR SPI_IER SPI_ISR SPI_FCR SPI_FSR SPI_WCR SPI_CCR SPI_MBC SPI_MTC SPI_BCC SPI_TXD SPI_RXD SD_GCTL_REG  SD_CKCR_REG  SD_TMOR_REG  SD_BWDR_REG  SD_BKSR_REG  SD_BYCR_REG  SD_CMDR_REG  SD_CAGR_REG  SD_RESP0_REG  SD_RESP1_REG  SD_RESP2_REG  SD_RESP3_REG  SD_IMKR_REG  SD_MISR_REG  SD_RISR_REG  SD_STAR_REG  SD_FWLR_REG  SD_FUNS_REG  SD_CBCR_REG  SD_BBCR_REG  SD_DBGC_REG  SD_A12A_REG  SD_HWRST_REG  SD_DMAC_REG  SD_DLBA_REG  SD_IDST_REG  SD_IDIE_REG  SD_CHDA_REG  SD_CBDA_REG  CARD_THLDC_REG  EMMC_DSBD_REG  SD_FIFO_REG  MMC_RSP_NONE  MMC_RSP_R1  MMC_RSP_R1b  MMC_RSP_R2  MMC_RSP_R3  MMC_RSP_R4  MMC_RSP_R5  MMC_RSP_R6  MMC_RSP_R7  MMC_RSP_PRESENT  MMC_RSP_136  MMC_RSP_CRC  MMC_RSP_BUSY  MMC_RSP_OPCODE  MMC_CMD_GO_IDLE_STATE  MMC_CMD_SEND_OP_COND  MMC_CMD_ALL_SEND_CID  MMC_CMD_SET_RELATIVE_ADDR  MMC_CMD_SET_DSR  MMC_CMD_SWITCH  MMC_CMD_SELECT_CARD  MMC_CMD_SEND_EXT_CSD  MMC_CMD_SEND_CSD  MMC_CMD_SEND_CID  MMC_CMD_STOP_TRANSMISSION  MMC_CMD_SEND_STATUS  MMC_CMD_SET_BLOCKLEN  MMC_CMD_READ_SINGLE_BLOCK  MMC_CMD_READ_MULTIPLE_BLOCK  MMC_CMD_SET_BLOCK_COUNT  MMC_CMD_WRITE_SINGLE_BLOCK  MMC_CMD_WRITE_MULTIPLE_BLOCK  MMC_CMD_ERASE_GROUP_START  MMC_CMD_ERASE_GROUP_END  MMC_CMD_ERASE  MMC_CMD_APP_CMD  MMC_CMD_SPI_READ_OCR  MMC_CMD_SPI_CRC_ON_OFF  MMC_CMD_RES_MAN  MMC_VDD_32_33  MMC_VDD_33_34  SD_CMD_SEND_RELATIVE_ADDR  SD_CMD_SWITCH_FUNC  SD_CMD_SEND_IF_COND  SD_CMD_SWITCH_UHS18V  SD_CMD_APP_SET_BUS_WIDTH  SD_CMD_APP_SD_STATUS  SD_CMD_ERASE_WR_BLK_START  SD_CMD_ERASE_WR_BLK_END  SD_CMD_APP_SEND_OP_COND  SD_CMD_APP_SEND_SCR  OCR_BUSY  OCR_HCS  OCR_VOLTAGE_MASK  OCR_ACCESS_MODE  MMC_STATUS_SWITCH_ERROR  MMC_STATUS_RDY_FOR_DATA  MMC_STATUS_CURR_STATE  MMC_STATUS_ERROR  MMC_STATE_PRG  SUNXI_MMC_CMD_RESP_EXPIRE  SUNXI_MMC_CMD_LONG_RESPONSE  SUNXI_MMC_CMD_CHK_RESPONSE_CRC  SUNXI_MMC_CMD_DATA_EXPIRE  SUNXI_MMC_CMD_WRITE  SUNXI_MMC_CMD_AUTO_STOP  SUNXI_MMC_CMD_WAIT_PRE_OVER  SUNXI_MMC_CMD_SEND_INIT_SEQ  SUNXI_MMC_CMD_UPCLK_ONLY  SUNXI_MMC_CMD_START  SUNXI_MMC_RINT_RESP_ERROR  SUNXI_MMC_RINT_COMMAND_DONE  SUNXI_MMC_RINT_DATA_OVER  SUNXI_MMC_RINT_TX_DATA_REQUEST  SUNXI_MMC_RINT_RX_DATA_REQUEST  SUNXI_MMC_RINT_RESP_CRC_ERROR  SUNXI_MMC_RINT_DATA_CRC_ERROR  SUNXI_MMC_RINT_RESP_TIMEOUT  SUNXI_MMC_RINT_DATA_TIMEOUT  SUNXI_MMC_RINT_VOLTAGE_CHANGE_DONE  SUNXI_MMC_RINT_FIFO_RUN_ERROR  SUNXI_MMC_RINT_HARD_WARE_LOCKED  SUNXI_MMC_RINT_START_BIT_ERROR  SUNXI_MMC_RINT_AUTO_COMMAND_DONE  SUNXI_MMC_RINT_END_BIT_ERROR  SUNXI_MMC_RINT_SDIO_INTERRUPT  SUNXI_MMC_RINT_CARD_INSERT  SUNXI_MMC_RINT_CARD_REMOVE  SUNXI_MMC_GCTRL_SOFT_RESET  SUNXI_MMC_GCTRL_FIFO_RESET  SUNXI_MMC_GCTRL_DMA_RESET  SUNXI_MMC_GCTRL_RESET  SUNXI_MMC_GCTRL_DMA_ENABLE  SUNXI_MMC_GCTRL_ACCESS_BY_AHB  SUNXI_MMC_CLK_ENABLE  SUNXI_MMC_STATUS_RXWL_FLAG  SUNXI_MMC_STATUS_TXWL_FLAG  SUNXI_MMC_STATUS_FIFO_EMPTY  SUNXI_MMC_STATUS_FIFO_FULL  SUNXI_MMC_STATUS_CARD_PRESENT  SUNXI_MMC_STATUS_CARD_DATA_BUSY  SUNXI_MMC_STATUS_DATA_FSM_BUSY SDC0_BASE SDMMC0_CLK_REG PIO_BASE PIO_CFG0 PIO_CFG1 PIO_CFG2 PIO_DATA LCD_CS LCD_RS LCD_RD LCD_WR LCD_RST LCD_BL NVIC_ISER0 AFIO_EXTICR1 EXTI_IMR EXTI_EMR EXTI_RTSR EXTI_FTSR EXTI_SWIER EXTI_PR UART1_BRR UART1_CR3 GPIOA_CRL GPIOA_CRH GPIOA_ODR GPIOA_IDR PORT_PUL1 DRAM_BASE PLL_DDR_CTRL_REG DRAM_GATING_REG SDR_PAD_DRV SDR_PAD_PUL DRAM_SCONR DRAM_STMG0R DRAM_STMG1R DRAM_SCTLR DRAM_SREFR DRAM_DDLYR DRAM_DRPTR0 TMR4_COUNT TMR4_MATCH TMR4_CONTROL TMR4_CLKENB TMR4_CLKGEN TMR3_COUNT TMR3_MATCH TMR3_CONTROL TMR3_CLKENB TMR3_CLKGEN TMR2_COUNT TMR2_MATCH TMR2_CONTROL TMR2_CLKENB TMR2_CLKGEN TMR1_COUNT TMR1_MATCH TMR1_CONTROL TMR1_CLKENB TMR1_CLKGEN TMR0_COUNT TMR0_MATCH TMR0_CONTROL TMR0_CLKENB TMR0_CLKGEN GPIOC_INTENB GPIOC_DET INTMODEL INTMASKL INTPENDL GPIOA_ALTFN0 UART_LCON0 UART_UCON0 UART_FCON0 UART_MCON0 UART_TRSTATUS0 UART_THB0 UART_BRD0 UART_CLKENB0 UART_CLKGEN0 GPIOC_PAD GPIOC_OUT GPIOC_OUTENB PCONG PDATG PUPG WTCON GPIO_AFRL RCC_CDCCIP2R RCC_APB1LENR USART2_BASE USART_CR1 USART_BRR USART_ISR USART_TDR RCC_CR RCC_CFGR RCC_CDCFGR1 RCC_CDCFGR2 RCC_SRDCFGR RCC_PLLCKSELR RCC_PLLCFGR RCC_PLL1DIVR RCC_PLL1FRACR RCC_APB4ENR PWR_BASE PWR_CSR1 PWR_CR3 PWR_SRDCR FLASH_BASE FLASH_ACR IOMUXC_SW_PAD_CTL_PAD_GPIO_BASE SW_PAD_CTL_PAD_GPIO_AD_B1_09 GPR_GPR26 IMXRT_GPIO6_BASE IOMUXC_GPR_BASE GPR_GPR27 IMXRT_GPIO7_BASE GPIO_DR GPIO_GDIR PORTC_PCR2 GPIO_PDIR GPIOC_BASE GPIO_PDDR GPIO_PDOR SIM_BASE SIM_SCGC5 WDOG_BASE WDOG_STCTRLH WDOG_UNLOCK PORTC_BASE PORTC_PCR5 PORTA_BASE PORTG_BASE RCC_AHB1ENR GPFSEL1 GPFSEL0 PORTD_BASE GPIO_PUPDR GPIO_IDR PORTE_BASE GPIO_MODER GPIO_ODR RCC_BASE RCC_AHB4ENR PORT_PINCFG6 PORT_IN PORT_OUT PORT_BASE PORT_A PORT_B PORT_DIR PORT_SET PORT_CLR GPFSEL3 GPLEV0 GPPUD GPPUDCLK0 GPFSEL2 GPSET0 GPCLR0 PORT_CFG2 UART_RBR UART_DLL UART_DLH UART_IER UART_IIR UART_LCR UART_MCR UART_USR TMR2_CTRL_REG TMR2_INTV_VALUE_REG TMR2_CUR_VALUE_REG TMR1_CTRL_REG TMR1_INTV_VALUE_REG TMR1_CUR_VALUE_REG INTC_BASE INTC_BASE_ADDR_REG INTC_PEND_REG0 INTC_PEND_REG1 INTC_EN_REG0 INTC_EN_REG1 INTC_MASK_REG0 INTC_MASK_REG1 INTC_RESP_REG0 INTC_RESP_REG1 INTC_FF_REG0 INTC_FF_REG1 __spl_checksum TMR_IRQ_EN_REG TMR_IRQ_STA_REG TMR0_CTRL_REG TMR0_INTV_VALUE_REG TMR0_CUR_VALUE_REG TIMER_BASE WDOG_IRQ_EN_REG WDOG_IRQ_STA_REG WDOG_CTRL_REG WDOG_CFG_REG WDOG_MODE_REG PORT_DATA PLL_CPU_CTRL_REG CPU_CLK_SRC_REG TWI_ADDR TWI_XADDR TWI_DATA TWI_CNTR TWI_STAT TWI_CCR TWI_SRST TWI_EFR TWI_LCR SSD1306_ADDRESS SSD1306_LCDWIDTH SSD1306_LCDHEIGHT SSD1306_SETCONTRAST SSD1306_DISPLAYALLOW_RESUME SSD1306_DISPLAYALLOW SSD1306_NORMALDISPLAY SSD1306_INVERTDISPLAY SSD1306_DISPLAYOFF SSD1306_DISPLAYON SSD1306_SETDISPLAYOFFSET SSD1306_SETCOMPINS SSD1306_SETVCOMDETECT SSD1306_SETDISPLAYCLOCKDIV SSD1306_SETPRECHARGE SSD1306_SETMULTIPLEX SSD1306_SETLOWCOLUMN SSD1306_SETHIGHCOLUMN SSD1306_SETSTARTLINE SSD1306_MEMORYMODE SSD1306_COLUMNADDR SSD1306_PAGEADDR SSD1306_COMSCANINC SSD1306_COMSCANDEC SSD1306_SEGREMAP SSD1306_CHARGEPUMP SSD1306_EXTERNALVCC SSD1306_SWITCHCAPVCC TWI0_BASE PORT_CFG0 PORT_CFG1 PORT_PUL0 UART1_BASE GCR TCR ISR FCR FSR WCR CCR MBC MTC BCC TXD RXD SPI0_BASE BUS_CLK_GATING_REG0 BUS_SOFT_RST_REG0 CCU_BASE UART0_BASE PLL_PERIPH_CTRL_REG AHB_APB_HCLKC_CFG_REG BUS_CLK_GATING_REG2 BUS_SOFT_RST_REG2 PA PB PC PD PE PF CFG0 CFG1 DATA RBR DLL DLH IER IIR LCR MCR USR ADC_DATA ADC_BASE ADC_CTRL ADC_INTC ADC_INTS __spl_size GPIO_BASE PE_CFG0 PE_DATA PINENABLE0 PALETTE_RAM VRAM DISPCNT BG0CNT BG1CNT BG2CNT BG3CNT GPIOB_CRL GPIOB_CRH GPIOB_IDR GPIOB_ODR GPIOB_BSRR GPIOB_BRR GPIOB_LCKR cortex-m0 cortex-m3 cortex-m4 cortex-m7 GPIOC_CRL GPIOC_IDR GPIOC_BSRR GPIOC_BRR GPIOC_LCKR arm7tdmi NR50 NR51 NR52 NR10 NR11 NR12 NR13 NR14 BGP OBP0 OBP1 P1 P1_BUTTONS P1_ARROWS P1_UP P1_DOWN P1_LEFT P1_RIGHT P1_A P1_B P1_SELECT P1_START STAT LCDCF_ON STATF_BUSY DMA DMA_CODE RAM LCDC OAMRAM LCDCF_OBJ8 LCDCF_OBJON IEF_VBLANK IE SCY SCX LYC LY rom0 CKGR_MOR CKGR_PLLR PMC_MCKR PIO_PDSR WDT_MR PMC_PCER PIO_PER PIO_OER PIO_SODR PIO_CODR p3.6 p1.2 oeb oed p0.0 p0.1 p0sel p0dir cmd_vcom_detect cmd_clock_div cmd_pre_charge cmd_multiplex cmd_start_line cmd_memory_mode cmd_column_addr cmd_page_addr cmd_scan_dec cmd_seg_remap cmd_charge_pump i2c_sda i2c_scl i2c_addr lcd_width lcd_height cmd_contrast cmd_disp_resume cmd_normal_disp cmd_invert_disp cmd_disp_off cmd_disp_on cmd_disp_offset cmd_com_pins spi_cs spi_do spi_di spi_clk p3.4 p3.5 spi_txrx tf0 tr0 et0 tmod tl0 th0 t2h t2l ie2 p3.1 auxr tl2 th2 uart_tx iap_data iap_addrh iap_addrl iap_cmd iap_trig iap_contr p3.2 p3.3 GPIOB_DATAOUT SYS_GPE_MFPL ea ex1 led it1 btn UA0_THR UA0_LCR UA0_BAUD WWDT_RLDCNT WWDT_CTL WWDT_STATUS ETMR0_ISR ETMR1_ISR ETMR2_ISR ETMR3_ISR ETMR0_IER ETMR1_IER ETMR2_IER ETMR3_IER ETMR0_CMPR ETMR2_CMPR ETMR3_CMPR ETMR1_CMPR ETMR0_CTL ETMR1_CTL ETMR2_CTL ETMR3_CTL TMR_ISR TMR0_DR TMR1_DR TMR2_DR TMR3_DR TMR4_DR TMR0_CSR TMR1_CSR TMR2_CSR TMR3_CSR TMR4_CSR TMR0_CMPR TMR1_CMPR TMR2_CMPR TMR3_CMPR TMR4_CMPR AIC_EOSCR AIC_SCR15 GPIOB_IFEN AIC_MECR AIC_MECRH WDT_CTL WDT_ALTCTL SYS_REGWPCTL CLK_DIVCTL8 SYS_PWRON CLK_DIVCTL0 CLK_APLLCON CLK_UPLLCON GPIOB_DIR GPIOB_DATAIN GPIOB_PUEN GPIOD_DIR GPIOD_DATAOUT CLK_PCLKEN0 U0LCR U0DLL U0DLM U0THR T2IR T3IR T2CTCR T3CTCR T2TCR T3TCR T2PR T3PR T2MR0 T3MR0 T2MCR T3MCR T0PR T1PR T0MR0 T1MR0 T0MCR T1MCR T0TCR T1TCR T0IR T1IR T0CTCR T1CTCR VICIntSelect VICDefVectAddr VICVectAddr0 VICVectCntl0 EXTINT WDMOD WDTC WDTV WDFEED EXTWAKE PCON VICIntEnable PLLCON PLLCFG PLLFEED FLASH_PUKR FLASH_IAPSR FLASH_DUKR UART1_DR UART1_SR UART1_BRR1 UART1_BRR2 UART1_CR1 UART1_CR2 WWDG_CR WWDG_WR IWDG_KR IWDG_PR IWDG_RLR AWU_CSR AWU_APR AWU_TBR initialized TIM4_CR1 TIM4_PSCR TIM4_ARR TIM4_CNTR TIM4_IER TIM4_SR TIM2_CR1 TIM2_IER TIM2_SR1 TIM2_PSCR TIM2_ARRH TIM2_ARRL TIM2_CNTRH TIM2_CNTRL TIM1_PSCRH TIM1_PSCRL TIM1_ARRH TIM1_ARRL TIM1_CR1 TIM1_IER TIM1_SR1 TIM1_CNTRH TIM1_CNTRL PA_IDR PA_ODR PA_DDR PA_CR1 PA_CR2 PB_IDR PB_ODR PB_DDR PB_CR1 PB_CR2 PD_IDR PD_ODR PD_DDR PD_CR1 PD_CR2 PC_ODR PC_IDR PC_DDR PC_CR1 PC_CR2 EEARL EECR EEDR SPMCSR UART_TX OCR0B TCCR0A OCR0A TIMSK0 TCNT0 TCCR0B WDTCR MCUSR MCUCR PCMSK GIMSK PINB DDRB PORTB LED BTN POCKETBEAGLE_SOFTIRQ IOPIN PINSEL0 IODIR IOCLR IOSET GPIO_DIR0 GPIO_PIN0 GPIO_SET0 GPIO_CLR0 BIT2 BIT1 BIT7 BIT16 BIT17 STACKINIT GPIOC_CRH GPIOC_ODR RCC_APB2ENR LEDDELAY unified TASKLET_STATE_SCHED TASKLET_STATE_RUN IRQF_TRIGGER_RISING BUTTON jiffies PERIOD USR3_LED __UNIQUE_ID_0 __UNIQUE_ID_1 __UNIQUE_ID_2 MB_OK SDL_INIT_VIDEO SDL_HWSURFACE LWLO EEADRL EEADRH EEDATL EEDATH EECON1 w C Z CFGS EEPGD WREN GIE EECON2 WR RD _WDTE_ON STATUS OSCCAL _CONFIG _IntRC_OSC GPIO ANSELA LATA cseg sseg home INTCON IOCAF WDTCON _WDTE_SWDTEN f IOCAN OPTION_REG hex _CONFIG2 _LVP_OFF _MCLRE_OFF OSCCON WPUA PORTA TRISA w 12f1822 p12f1822 _CONFIG1 _FOSC_INTOSC _WDTE_OFF STATUS_DEVICE_POWER_FAILURE STATUS_UNSUCCESSFUL LowPagePriority WdfDeviceIoDirect IRP_MJ_PNP DO_DIRECT_IO O_RDWR IO_NO_INCREMENT O_RDONLY O_WRONLY MINORBITS MINORMASK MINORBITS WdfDeviceIoNeither IRP_MN_START_DEVICE WDF_NO_OBJECT_ATTRIBUTES IRP_MN_REMOVE_DEVICE STATUS_SUCCESS GENERIC_READ WDF_NO_HANDLE GENERIC_WRITE METHOD_BUFFERED IRP_MJ_DEVICE_CONTROL STATUS_PENDING NULL FILE_ANY_ACCESS METHOD_OUT_DIRECT METHOD_IN_DIRECT METHOD_NEITHER FILE_SHARE_READ STATUS_CANCELLED FILE_FLAG_OVERLAPPED WdfIoQueueDispatchSequential WdfDeviceIoBuffered DISPATCH_LEVEL KernelMode OPEN_EXISTING FILE_ATTRIBUTE_NORMAL INFINITE THREAD_ALL_ACCESS INVALID_HANDLE_VALUE IRP_MJ_CREATE IRP_MJ_CLOSE IRP_MJ_WRITE IRP_MJ_READ FILE_DEVICE_UNKNOWN Executive FALSE TRUE DO_BUFFERED_IO DO_DEVICE_INITIALIZING';
    var my_keyword = 'for endvar endlocals endmacro then times shr struc endstruc resd resb switch external case default endswitch argc argv locals do iend istruc at declare none endproc  entry bits defaultlib drectve info use32 library GUI stdcall forever breakif endfor  static readonly var procedure je extrn format elf executable entry:start segment readable writeable gs ecall a7 ra subu v0 a2 ldp stp x19 x29 x30 svc x0 x1 x2 x3 x4 x5 x6 x7 x8 rbp rsp module lsra optsdcc mhc08 codeivt abs code lda sta aix ldhx cphx d0 mfc0 xori bleq blne orreq bge ble skip adr jnz bcs bcc stmia ldmia pool addiu addi a0 a1 t0 t1 t2 bgtz d hl cp fill di ei var af bc de ldh r15 r14 cpsr cpsr_c msr mrs halt true import a x y iret swap rim bcpl incw cpw nz jrule jrne sbic r30 r31 r18 r19 spm r16 r17 la sei cli cpu program begin isb sy ubfx asr c3 space pushfd popfd leave eor section pushl ifnb irp endr rept vararg movl ascii swi rrf incf decf tris option retlw movfw xorlw addlw addlw clrw rlf btjf bset bres jp area int ds ld ldw decw tnzw jrne jra in out sbrc sbrs rjmp sbi rcall ldi sbiw brne cbi btfsc sleep xorwf andwf retfie clrwdt movf btfss bsf movlw movwf decfsz return clrf bcf goto banksel define list __config include cpl dptr movc acc cjne jb rlc set rrc jc sjmp syntax thumb_func arm thumb setb clr djnz beqz divu addu mflo mfhi sltiu bnez sll sra lb mul srl sltu ori sh wait addiu move jal sw li lui andi sb lw c lbu jr j mtc0 org jmp anl jz orl xrl addne ldreq addeq ldrne orrne strne bls lsr stmfd ldmfd sp proto ORIGIN LENGTH MEMORY SECTIONS mvn ands movne moveq blt dcd dcb p15 c1 c0 orr mrc mcr bic beq strb strh ldrb ldrh bx bxeq addge tst nop sub subs bal global ldr modinfo asciz zero str align extern equiv macro lsl b bl req endm lr pc r0 r1 r2 r3 r4 cmp bne r5 r6 r7 r8 r9 r10 r11 r12 struct ends dup push pop end public mov fastcall inc dec movzx if _try _finally endif else elseif proc rax rcx rdi rsi rdx ebp esp rbx eax equ ebx ecx edx edi esi movz and or xor call invoke Push Pop local offset addr sizeof PTR not lea add sub while ret reti endp uses endw bl break dl data idata text';
    var my_type = 'RECT PAINTSTRUCT uint_t size_t POINT uns32 HWND UINT WPARAM string WNDCLASS ptrdiff_t NASMX_TCHAR LPARAM MSG KSEMAPHORE KMUTEX KEVENT dw cdev file_operations stdout long void WDFTIMER qword WDFDEVICE WDF_TIMER_CONFIG WDF_OBJECT_ATTRIBUTES WDF_DRIVER_CONFIG PMDL typedef VOID WDFFUNC PWDF_FILEOBJECT_CONFIG PFN_WDF_DEVICE_FILE_CREATE PFN_WDF_FILE_CLOSE PFN_WDF_FILE_CLEANUP WDFREQUEST WDFFILEOBJECT WDFDRIVER WDFQUEUE PWDFDEVICE_INIT DRIVER_EXTENSION WDF_FILEOBJECT_CONFIG WDF_IO_QUEUE_CONFIG dword dd db PIRP _IRP IO_STACK_LOCATION PIO_STACK_LOCATION NTSTATUS PKTIMER BOOLEAN LONG PKDPC KDPC PDRIVER_OBJECT KTIMER PUNICODE_STRING PDEVICE_OBJECT DEVICE_OBJECT BYTE word LIST_ENTRY WDFMEMORY byte 2byte UNICODE_STRING PVOID DRIVER_OBJECT DWORD LARGE_INTEGER OVERLAPPED IO_CSQ KSPIN_LOCK PIO_CSQ KIRQL PKIRQL';
    var my_function = 'Chord _Chord@36 _Arc@36 Arc RegisterClassA DefWindowProcA size _Polygon@12 Polygon _RegisterClassA@4 _DefWindowProcA@16 RegisterClass DefWindowProc Ellipse _Ellipse@20 _Rectangle@20 Rectangle CreateMyPen DrawMyLine _LineTo@12 _MoveToEx@16 _CreatePen@12 _SelectObject@8 LineTo MoveToEx CreatePen SelectObject _FillRect@12 _CreateSolidBrush@4 _DeleteObject@4 FillRect DeleteObject CreateSolidBrush handle_paint _SetPixel@16 _EndPaint@8 _BeginPaint@8 SetPixel EndPaint BeginPaint handle_vscroll handle_sb_line_up handle_sb_line_down handle_sb_page_up handle_sb_page_down _SetScrollPos@16 _SetScrollRange@20 SetScrollPos SetScrollRange _SetTimer@16 _KillTimer@8 SetTimer KillTimer handle_timer handle_mouse handle_key wsprintfA SetWindowTextA crt_sprintf _SetWindowTextA@8 _sprintf SetWindowText __imp__wsprintfA handle_keydown _DestroyWindow@4 _SetWindowLongA@12 _CallWindowProcA@20 _PostQuitMessage@4 handle_default _GetMessageA@16 _CreateWindowExA@48 _GetCommandLineA@0 _GetModuleHandleA@4 _DispatchMessageA@4 NASMX_IENDSTRUC NASMX_IENDSTRUC NASMX_AT NASMX_ISTRUC NASMX_TEXT _MessageBoxA@16 _ExitProcess@4 handle_close handle_destroy finish SetWindowLongA CallWindowProcA GetMessageA CreateWindowExA DispatchMessageA GetCommandLineA GetModuleHandleA ShowWindow UpdateWindow SetWindowLong DestroyWindow CallWindowProc PostQuitMessage WndProc GetMessage DispatchMessage GetModuleHandle GetCommandLine CreateWindowEx WinMain MessageBoxA final palette tile main hw_reset loop sw_reset KeReadStateSemaphore KeReleaseSemaphore KeInitializeSemaphore KeReleaseMutex KeInitializeMutex KeSetEvent KeInitializeEvent KeReleaseSpinLock KeAcquireSpinLock RunMe MyThread IrpPnp AddDevice Unload init_lcd_module spi_9bits_write init_tcon_module uart_print_byte uart_print_4byte spi_write_enable spi_write_disable spi_is_busy spi_erase_all spi_init spi_read_jid spi_read_uid spi_read_data uart_buf spi_erase_sector spi_write_data send_byte ccu_init sdcard_init sdcard_cmd uart_4byte uart_resp sdcard_wait sdcard_wr sdcard_rd lcd_color lcd_init lcd_rst lcd_wr lcd_cmd lcd_dat _exti1 uart_byte uart_init rcc_init flash_init dram_get_dram_size dram_scan_readpipe dram_para_setup dram_delay_scan sdelay dram_delay uart_send_4byte uart_send_byte init_pll_module init_uart_module init_dram_module uart_send_byte _undefined_instruction _software_interrupt _not_used ssd1306_init ssd1306_set_col_addr ssd1306_set_page_addr i2c_start i2c_write i2c_stop send_cmd send_data require pngtolcd log function toString w25q64_erase_sector w25q64_write_byte w25q64_read_byte w25q64_wait_busy w25q64_write_enable t0_handle uart_send_byte delay_16us uart_recv_byte start t2_handle eeprom_disable uart_send eeprom_erase eeprom_write eeprom_read blink_led delay delay_18ms delay_1s int1_handle fiq_handler reset hang _pabort _dabort _fiq softirq_handler raise_softirq open_softirq raise_softirq_irqoff _undef _swi _prefetch_abort _data_abort _reserved _irq myioctl unlocked_ioctl ioctl arm_copy_to_user arm_copy_from_user myread mywrite __class_create device_create cdev_init device_destroy class_destroy myopen myclose release kthread_stop wake_up_process kthread_should_stop kthread_create_on_node kthread_handler queue_work_on destroy_workqueue __alloc_workqueue_key workqueue_handler tasklet_handler tasklet_init tasklet_kill _test_and_set_bit __tasklet_schedule free_irq gpiod_to_irq irq_handler request_threaded_irq del_timer gpiod_get_raw_value gpiod_direction_input mod_timer timer_handler init_timer_key msleep gpio_free gpio_request gpio_to_desc gpiod_set_raw_value gpiod_direction_output_raw put _start _vector atol __uClibc_main SDL_RWFromFile SDL_LoadBMP_RW SDL_UpperBlit SDL_Flip SDL_Delay SDL_FreeSurface gtk_main_quit gtk_init gtk_window_new gtk_label_new gtk_container_get_type g_type_check_instance_cast gtk_container_add gtk_widget_show_all g_signal_connect_data gtk_main MessageBox exit sysenter syscall assert WdfTimerStart SDL_Init SDL_Quit SDL_SetVideoMode WdfTimerStop WdfDeviceWdmGetDeviceObject WDF_TIMER_CONFIG_INIT_PERIODIC WDF_OBJECT_ATTRIBUTES_INIT WdfTimerCreate WdfRequestSetInformation WdfRequestRetrieveUnsafeUserOutputBuffer WdfRequestProbeAndLockUserBufferForWrite WdfMemoryGetBuffer WdfRequestRetrieveUnsafeUserInputBuffer WdfRequestProbeAndLockUserBufferForRead WdfRequestRetrieveOutputWdmMdl WdfRequestRetrieveInputWdmMdl __copy_to_user __copy_from_user MAJOR MINOR printk MKDEV init_module cleanup_module printf open read write close WDF_FILEOBJECT_CONFIG_INIT IoStartTimer cdev_del unregister_chrdev_region alloc_chrdev_region cdev_add cdev_alloc IoStopTimer IoAttachDeviceToDeviceStack WdfDeviceInitAssignName WdfDeviceCreate IoInitializeTimer WdfRequestComplete memset WdfRequestCompleteWithInformation memcpy WDF_DRIVER_CONFIG_INIT WdfDeviceInitSetIoType WdfDeviceInitSetFileObjectConfig WdfDeviceCreateSymbolicLink WDF_IO_QUEUE_CONFIG_INIT_DEFAULT_QUEUE WdfIoQueueCreate WdfDriverCreate crt_printf IoDetachDevice IoSkipCurrentIrpStackLocation WdfRequestRetrieveOutputMemory WdfMemoryCopyFromBuffer WdfRequestRetrieveInputMemory WdfMemoryCopyToBuffer IoCallDriver KeSetTimerEx KeSetTimer IoMarkIrpPending IoStartPacket KeCancelTimer DeviceIoControl wsprintf sprintf KeInitializeTimer IsListEmpty RemoveHeadList InsertHeadList InitializeListHead KeInitializeDpc IoCsqInsertIrp KeInitializeSpinLock KefReleaseSpinLockFromDpcLevel IoCsqInitialize KfAcquireSpinLock KfReleaseSpinLock CancelIo InsertTailList RemoveEntryList MmGetMdlVirtualAddress CreateEvent WaitForSingleObject IoStartNextPacket ProbeForRead strcpy strcmp CTL_CODE strlen WriteFile StrLen crt_memset MmGetMdlByteCount MmGetSystemAddressForMdlSafe IoGetCurrentProcess ReadFile PsTerminateSystemThread ExitProcess DbgPrint KeDelayExecutionThread PsCreateSystemThread CreateFile ObReferenceObjectByHandle ZwClose KeWaitForSingleObject ObDereferenceObject Sleep SleepEx CloseHandle CTA0 IofCompleteRequest IoGetCurrentIrpStackLocation IoDeleteDevice DriverEntry RtlInitUnicodeString IoCreateDevice IoCreateSymbolicLink IoDeleteSymbolicLink';

    this.regexList = [
      {regex: /^ *;.*/gm, css: 'my_comment'},
      {regex: /^ *@.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.386.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.text.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.bss.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.align.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.code.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.data.*/gm, css: 'my_preprocessor'},
      {regex: /^ *option.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.section.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.set.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.const.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.model.*/gm, css: 'my_preprocessor'},
      {regex: /^ *\.include.*/gm, css: 'my_preprocessor'},
      {regex: /^ *include.*/gm, css: 'my_preprocessor'},
      {regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      {regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      {regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      {regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
    ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['asm', 'assembly', 'assembler'];
  SyntaxHighlighter.brushes.Cpp = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
