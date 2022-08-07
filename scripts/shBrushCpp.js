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
    var my_constant = 'STAP_SESSION_STOPPING STAP_SESSION_STARTING EFAULT STP_START STP_TRANSPORT WAIT_DISP_OP_TIMEOUT ERESTARTSYS GL_TRIANGLES GL_FLOAT GL_FALSE GL_COLOR_BUFFER_BIT GL_DEPTH_BUFFER_BIT GL_VERTEX_SHADER GL_FRAGMENT_SHADER GL_VERSION SDL_GL_CONTEXT_PROFILE_MASK SDL_GL_CONTEXT_MAJOR_VERSION SDL_GL_CONTEXT_MINOR_VERSION SDL_WINDOW_OPENGL SDL_GL_CONTEXT_PROFILE_ES SDL_Convert_S8_to_F32 SDL_Convert_U8_to_F32 SDL_Convert_S16_to_F32 SDL_Convert_U16_to_F32 SDL_Convert_S32_to_F32 SDL_Convert_F32_to_S8 SDL_Convert_F32_to_U8 SDL_Convert_F32_to_S16 SDL_Convert_F32_to_U16 SDL_Convert_F32_to_S32 SSE2 NEON FB_SIZE BTN GPIO_IN GPIO_OUT FBIOPUT_VSCREENINFO LED SDL_PIXELFORMAT_ABGR8888 SDL_PIXELFORMAT_RGB888 SDL_PIXELFORMAT_BGR888 SDL_PIXELFORMAT_YV12 SDL_PIXELFORMAT_IYUV SDL_PIXELFORMAT_NV12 SDL_PIXELFORMAT_NV21 SDL_PIXELFORMAT_UNKNOWN AF_UNIX SOCK_STREAM IPC_CREAT IPC_RMID alphasort NTSYSAPI IRP_MN_START_DEVICE NotificationEvent MAX_INIT_ARGS MAX_SEMA_LIMIT DEV_NAME SYM_NAME BACKLIGHT_RAW MAX_SEMA_COUNT A0 A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 A11 A12 A13 A14 A15 ADPS0 ADPS1 ADPS2 Serial ADCSRA ADCSRA ADCSRA ROM_DEF TP_TPR TP_FIFOCS TEMP_DATA TP_CTRL_REG1 noinline REGION_MAIN_CPU_BIOS REGION_FIXED_LAYER_BIOS REGION_SPRITES REGION_FIXED_LAYER_CARTRIDGE REGION_SPR_USAGE REGION_GAME_FIX_USAGE REGION_MAIN_CPU_CARTRIDGE REGION_AUDIO_CPU_CARTRIDGE REGION_AUDIO_DATA_1 REGION_AUDIO_DATA_2 GN_FALSE GN_TRUE HAS_CUSTOM_CPU_BIOS HAS_CUSTOM_SFIX_BIOS ROOTPATH TICKS_PER_SEC CLOCK_MONOTONIC DLL_PROCESS_ATTACH DLL_THREAD_ATTACH DLL_PROCESS_DETACH DLL_THREAD_DETACH NTAPI PIMAGE_TLS_CALLBACK YY_DECL RGB_WHITE RGB_YELLOW RGB_RED RGB_GREEN RGB_BLUE font_ibm font_min font_spect font_italic NR50_REG NR51_REG NR52_REG NR10_REG NR11_REG NR12_REG NR13_REG NR14_REG M_FILL M_NOFILL NONBANKED BLACK WHITE SOLID SHOW_WIN VBK_REG SHOW_BKG DISPLAY_ON J_LEFT J_DOWN J_UP J_RIGHT J_A J_B J_SELECT J_START SPRITES_8x8 SHOW_SPRITES OMAPFB_QUERY_PLANE OMAPFB_QUERY_MEM OMAPFB_SETUP_PLANE FB_MAP_SIZE OMAPFB_SETUP_MEM MUSB_INTRUSB MUSB_INTRTX MUSB_INTRRX MUSB_INTR_BABBLE IRQ_NONE SDL_JOYAXISMOTION BUSY SDI SSD1351_CMD_SETCOLUMNADDRESS SSD1351_CMD_SETROWADDRESS SSD1351_CMD_WRITERAM SSD1351_CMD_READRAM SSD1351_CMD_COLORDEPTH SSD1351_CMD_SETDISPLAYSTARTLINE SSD1351_CMD_SETDISPLAYOFFSET SSD1351_CMD_SETDISPLAYMODE_ALLOFF SSD1351_CMD_SETDISPLAYMODE_ALLON SSD1351_CMD_SETDISPLAYMODE_RESET SSD1351_CMD_SETDISPLAYMODE_INVERT SSD1351_CMD_FUNCTIONSELECTION SSD1351_CMD_SLEEPMODE_DISPLAYOFF SSD1351_CMD_SLEEPMODE_DISPLAYON SSD1351_CMD_SETPHASELENGTH SSD1351_CMD_ENHANCEDDRIVINGSCHEME SSD1351_CMD_SETFRONTCLOCKDIV SSD1351_CMD_SETSEGMENTLOWVOLTAGE SSD1351_CMD_SETGPIO SSD1351_CMD_SETSECONDPRECHARGEPERIOD SSD1351_CMD_GRAYSCALELOOKUP SSD1351_CMD_LINEARLUT SSD1351_CMD_SETPRECHARGEVOLTAGE SSD1351_CMD_SETVCOMHVOLTAGE SSD1351_CMD_SETCONTRAST SSD1351_CMD_MASTERCONTRAST SSD1351_CMD_SETMUXRRATIO SSD1351_CMD_NOP3 SSD1351_CMD_NOP4 SSD1351_CMD_SETCOMMANDLOCK SSD1351_CMD_HORIZONTALSCROLL SSD1351_CMD_STOPMOVING SSD1351_CMD_STARTMOVING SSD1306_ADDRESS SSD1306_LCDWIDTH SSD1306_LCDHEIGHT SSD1306_SETCONTRAST SSD1306_DISPLAYALLOW_RESUME SSD1306_DISPLAYALLOW SSD1306_NORMALDISPLAY SSD1306_INVERTDISPLAY SSD1306_DISPLAYOFF SSD1306_DISPLAYON SSD1306_SETDISPLAYOFFSET SSD1306_SETCOMPINS SSD1306_SETVCOMDETECT SSD1306_SETDISPLAYCLOCKDIV SSD1306_SETPRECHARGE SSD1306_SETMULTIPLEX SSD1306_SETLOWCOLUMN SSD1306_SETHIGHCOLUMN SSD1306_SETSTARTLINE SSD1306_MEMORYMODE SSD1306_COLUMNADDR SSD1306_PAGEADDR SSD1306_COMSCANINC SSD1306_COMSCANDEC SSD1306_SEGREMAP SSD1306_CHARGEPUMP SSD1306_EXTERNALVCC SSD1306_SWITCHCAPVCC I2C_SDA I2C_SCL Command Parameter SCL PWMC RS RD WR PWMCH PWMCL PWMCKS PWM2T1 PWM2T1H PWM2T1L PWM2T2 PWM2T2H PWM2T2L PWM2CR PWM3T1 PWM3T1H PWM3T1L PWM3T2 PWM3T2H PWM3T2L PWM3CR PWM4T1 PWM4T1H PWM4T1L PWM4T2 PWM4T2H PWM4T2L PWM4CR PWM5T1 PWM5T1H PWM5T1L PWM5T2 PWM5T2H PWM5T2L PWM5CR PWM6T1 PWM6T1H PWM6T1L PWM6T2 PWM6T2H PWM6T2L PWM6CR PWM7T1 PWM7T1H PWM7T1L PWM7T2 PWM7T2H PWM7T2L PWM7CR ACC B PSW CY AC F0 RS1 RS0 OV P SP DPL DPH P0 P00 P01 P02 P03 P04 P05 P06 P07 P1 P10 P11 P12 P13 P14 P15 P16 P17 P2 P20 P21 P22 P23 P24 P25 P26 P27 P3 P30 P31 P32 P33 P34 P35 P36 P37 P4 P40 P41 P42 P43 P44 P45 P46 P47 P5 P50 P51 P52 P53 P54 P55 P56 P57 P6 P60 P61 P62 P63 P64 P65 P66 P67 P7 P70 P71 P72 P73 P74 P75 P76 P77 P0M0 P0M1 P1M0 P1M1 P2M0 P2M1 P3M0 P3M1 P4M0 P4M1 P5M0 P5M1 P6M0 P6M1 P7M0 P7M1 PCON AUXR AUXR1 P_SW1 CLK_DIV BUS_SPEED P1ASF P_SW2 IE EA ELVD EADC ES ET1 EX1 ET0 EX0 IP PPCA PLVD PADC PS PT1 PX1 PT0 PX0 IE2 IP2 INT_CLKO TCON TF1 TR1 TF0 TR0 IE1 IT1 IE0 IT0 TMOD TL0 TL1 TH0 TH1 T4T3M T3T4M T4H T4L T3H T3L T2H T2L WKTCL WKTCH WDT_CONTR SCON SM0 SM1 SM2 REN TB8 RB8 TI RI SBUF S2CON S2BUF S3CON S3BUF S4CON S4BUF SADDR SADEN ADC_CONTR ADC_RES ADC_RESL SPSTAT SPCTL SPDAT IAP_DATA IAP_ADDRH IAP_ADDRL IAP_CMD IAP_TRIG IAP_CONTR CCON CF CR CCF2 CCF1 CCF0 CMOD CL CH CCAPM0 CCAPM1 CCAPM2 CCAP0L CCAP1L CCAP2L PCA_PWM0 PCA_PWM1 PCA_PWM2 CCAP0H CCAP1H CCAP2H CMPCR1 CMPCR2 PWMCFG PWMCR PWMIF PWMFDCR P55 CS RST SCK SDA DC BL AUXR p3 LCD_RW LCD_RS LCD_E LCD_WR LCD_PORT SDL_FLIP_NONE SDL_TRUE SDL_FLASE PINB PORTB DDRB HI_SOFTIRQ TIMER_SOFTIRQ NET_TX_SOFTIRQ NET_RX_SOFTIRQ BLOCK_SOFTIRQ IRQ_POLL_SOFTIRQ TASKLET_SOFTIRQ SCHED_SOFTIRQ HRTIMER_SOFTIRQ RCU_SOFTIRQ POCKETBEAGLE_SOFTIRQ NR_SOFTIRQS FUNC_GPIO1 FUNC_GPIO2 FUNC_GPIO3 GPIO_DM_OUTPUT GPIO_PV_HIGH FUNC_GPIO4 GPIO_DM_INPUT GPIO_PV_LOW TRISECLR PORTESET PORTECLR PAGE_SHIFT EAGAIN ILI9335_SLCD_RESET GPIO1_MODE_ADDR GPIO2_MODE_ADDR GPIO_CTRL_0_ADDR GPIO_CTRL_1_ADDR GPIO_CTRL_2_ADDR GPIO_DATA_0_ADDR GPIO_DATA_1_ADDR GPIO_DATA_2_ADDR GPIO_DSET_0_ADDR GPIO_DSET_1_ADDR GPIO_DSET_2_ADDR GPIO_DCLR_0_ADDR GPIO_DCLR_1_ADDR GPIO_DCLR_2_ADDR GPIO1_MODE_INDEX GPIO2_MODE_INDEX GPIO_DSET_0_INDEX GPIO_DATA_0_INDEX GPIO_DCLR_0_INDEX GPIO_CTRL_0_INDEX GPIO1_MODE GPIO2_MODE GPIO_CTRL_0 GPIO_CTRL_1 GPIO_CTRL_2 GPIO_DATA_0 GPIO_DATA_1 GPIO_DATA_2 GPIO_DSET_0 GPIO_DSET_1 GPIO_DSET_2 GPIO_DCLR_0 GPIO_DCLR_1 GPIO_DCLR_2 MTFB_PM_OPS FB_BLANK_POWERDOWN FBINFO_DEFAULT FB_BLANK_UNBLANK HZ PAGE_SIZE FBINFO_FLAG_DEFAULT register_framebuffer FB_ACTIVATE_FORCE LCDDMA_CTRL IRQENABLE_SET LCDDMA_FB0_BASE LCDDMA_FB0_CEILING DRIVER_NAME GFP_DMA ENOMEM PID CLKC_ENABLE CTRL LIDD_CS0_CONF EADDRNOTAVAIL ENOENT ENODEV FB_VMODE_NONINTERLACED IORESOURCE_MEM GFP_KERNEL IRQSTATUS LIDD_CTRL PALETTE_SIZE FB_NONSTD_REV_PIX_IN_B FB_VISUAL_DIRECTCOLOR FB_VISUAL_TRUECOLOR LIDD_CS0_ADDR LIDD_CS0_DATA FB_TYPE_PACKED_PIXELS FB_VISUAL_PSEUDOCOLOR FB_ACCEL_NONE ILI9335_SLCD_WR ILI9335_SLCD_RS ILI9335_SLCD_RD ILI9335_SLCD_CS ILI9335_SLCD_D10 ILI9335_SLCD_D11 ILI9335_SLCD_D12 ILI9335_SLCD_D13 ILI9335_SLCD_D14 ILI9335_SLCD_D15 ILI9335_SLCD_D16 ILI9335_SLCD_D17 ILI9335_SLCD_RST BUS_HOST KEY_UP KEY_DOWN KEY_LEFT KEY_RIGHT KEY_LEFTCTRL KEY_BACKSPACE KEY_ESC KEY_ENTER KEY_TAB KEY_LEFTALT KEY_SPACE KEY_LEFTSHIFT EV_KEY GPIO1 GPIO_DATAOUT LED_R LED_G LED_B TITLE jiffies RCC_PLLSource_HSE_Div1 RCC_PLLMul_16 MY_IOCTL THIS_MODULE IRQF_TRIGGER_RISING IRQ_HANDLED BUTTON USR3_LED R_ARM_THM_CALL R_ARM_THM_JUMP24 ENOEXEC SDL_RENDERER_ACCELERATED SDL_RENDERER_PRESENTVSYNC DRM_IOCTL_MODE_DESTROY_DUMB DRM_IOCTL_MODE_CREATE_DUMB DRM_IOCTL_MODE_MAP_DUMB DRM_MODE_PAGE_FLIP_EVENT DRM_EVENT_CONTEXT_VERSION O_CLOEXEC SDL_ENABLE SDL_INIT_AUDIO SDL_INIT_JOYSTICK SDL_JOYBUTTONUP SDL_JOYBUTTONDOWN XK_space LISTEN_PORT_OFFSET SDL_INIT_NOPARACHUTE RFB_BUF_SIZE SDL_KEYUP SDL_TEXTINPUT SDL_QUIT SDL_MOUSEWHEEL SDL_WINDOWEVENT_FOCUS_LOST SDL_WINDOWEVENT_FOCUS_GAINED SDL_WINDOWEVENT SDL_WINDOWEVENT_EXPOSED SDLK_BACKSPACE XK_BackSpace SDLK_TAB XK_Tab SDLK_CLEAR XK_Clear SDLK_RETURN XK_Return SDLK_PAUSE XK_Pause SDLK_ESCAPE XK_Escape SDLK_DELETE XK_Delete SDLK_KP_0 XK_KP_0 SDLK_KP_1 XK_KP_1 SDLK_KP_2 XK_KP_2 SDLK_KP_3 XK_KP_3 SDLK_KP_4 XK_KP_4 SDLK_KP_5 XK_KP_5 SDLK_KP_6 XK_KP_6 SDLK_KP_7 XK_KP_7 SDLK_KP_8 XK_KP_8 SDLK_KP_9 XK_KP_9 SDLK_KP_PERIOD XK_KP_Decimal SDLK_KP_DIVIDE XK_KP_Divide SDLK_KP_MULTIPLY XK_KP_Multiply SDLK_KP_MINUS XK_KP_Subtract SDLK_KP_PLUS XK_KP_Add SDLK_KP_ENTER XK_KP_Enter SDLK_KP_EQUALS XK_KP_Equal SDLK_UP XK_Up SDLK_DOWN XK_Down SDLK_RIGHT XK_Right SDLK_LEFT XK_Left SDLK_INSERT XK_Insert SDLK_HOME XK_Home SDLK_END XK_End SDLK_PAGEUP XK_Page_Up SDLK_PAGEDOWN XK_Page_Down SDLK_F1 XK_F1 SDLK_F2 XK_F2 SDLK_F3 XK_F3 SDLK_F4 XK_F4 SDLK_F5 XK_F5 SDLK_F6 XK_F6 SDLK_F7 XK_F7 SDLK_F8 XK_F8 SDLK_F9 XK_F9 SDLK_F10 XK_F10 SDLK_F11 XK_F11 SDLK_F12 XK_F12 SDLK_F13 XK_F13 SDLK_F14 XK_F14 SDLK_F15 XK_F15 SDLK_NUMLOCKCLEAR XK_Num_Lock SDLK_CAPSLOCK XK_Caps_Lock SDLK_SCROLLLOCK XK_Scroll_Lock SDLK_RSHIFT XK_Shift_R SDLK_LSHIFT XK_Shift_L SDLK_RCTRL XK_Control_R SDLK_LCTRL XK_Control_L SDLK_RALT XK_Alt_R SDLK_LALT XK_Alt_L SDLK_LGUI XK_Super_L SDLK_RGUI XK_Super_R SDLK_COMPOSE XK_Compose SDLK_MODE XK_Mode_switch SDLK_HELP XK_Help SDLK_PRINTSCREEN XK_Print SDLK_SYSREQ XK_Sys_Req KMOD_CTRL SDL_HINT_RENDER_SCALE_QUALITY SDL_PIXELFORMAT_ARGB8888 SDL_WINDOWPOS_UNDEFINED SDL_WINDOW_RESIZABLE SDL_WINDOW_SHOWN SDL_PIXELFORMAT_RGB565 SDL_TEXTUREACCESS_STREAMING std CV_CAP_PROP_POS_FRAMES CAP_PROP_FRAME_COUNT JS_EVENT_AXIS BADADDR SB_BOTH SW_SHOW WS_BORDER MM_TEXT IDS_ABOUTBOX MF_SEPARATOR MF_STRING SetIcon IDM_ABOUTBOX DIB_RGB_COLORS BI_RGB GHND _In_ SM_CXSCREEN VK_ESCAPE SM_CYSCREEN DeviceConnected SRCCOPY NoDeviceConnected IOCTL_USB_GET_NODE_CONNECTION_INFORMATION IOCTL_USB_GET_NODE_CONNECTION_INFORMATION_EX IOCTL_USB_GET_NODE_INFORMATION CM_DRP_DEVICEDESC CR_SUCCESS CM_DRP_DRIVER GUID_CLASS_USB_HOST_CONTROLLER GPTR NUM_HCS_TO_CHECK GUID_DEVINTERFACE_USB_HUB GUID_DEVINTERFACE_USB_DEVICE GUID_DEVINTERFACE_USB_HOST_CONTROLLER GUID_USB_WMI_STD_DATA GUID_USB_WMI_STD_NOTIFICATION IDC_TREE IDI_ICON IDI_BADICON IDI_COMPUTER IDI_HUB IDI_NODEVICE IDC_EDIT IDC_STATUS IDD_MAINDIALOG IDACCEL IDC_SPLIT TVI_ROOT DBT_DEVICEARRIVAL DBT_DEVICEREMOVECOMPLETE TVN_SELCHANGED WM_SETFONT TVSIL_NORMAL DEVICE_NOTIFY_WINDOW_HANDLE GUID_CLASS_USBHUB DBT_DEVTYP_DEVICEINTERFACE GUID_CLASS_USB_DEVICE WM_INITDIALOG WM_CLOSE WM_COMMAND WM_LBUTTONDOWN WM_LBUTTONUP WM_MOUSEMOVE WM_SIZE WM_NOTIFY WM_DEVICECHANGE CALLBACK CREATE_ALWAYS GMEM_MOVEABLE SDL_INIT_TIMER SDL_SRCALPHA GTK_WINDOW_TOPLEVEL EINVAL EOF SIGINT SIG_DFL FBIOGET_FSCREENINFO FBIOGET_VSCREENINFO PROT_READ PROT_WRITE MAP_SHARED HILDON_SIZE_AUTO HILDON_BUTTON_ARRANGEMENT_VERTICAL HIDIOCGRDESC HIDIOCGRDESCSIZE HIDIOCGRAWNAME HIDIOCGRAWPHYS HIDIOCGRAWINFO HIDIOCSFEATURE HIDIOCGFEATURE O_NONBLOCK BORDER_CONSTANT MORPH_RECT SDL_FALSE COLOR_BGR2GRAY EVENT_LBUTTONDOWN EVENT_LBUTTONUP EVENT_RBUTTONDOWN EVENT_RBUTTONUP EVENT_MBUTTONDOWN EVENT_MBUTTONUP EVENT_MOUSEMOVE FONT_HERSHEY_SIMPLEX INT_MAX INTER_LINEAR_EXACT RETR_LIST CHAIN_APPROX_NONE CV_8UC1 LINE_AA CV_32S CV_PI IMREAD_GRAYSCALE RETR_TREE CHAIN_APPROX_SIMPLE CV_8UC3 Z_DEFAULT_COMPRESSION Z_OK Z_FINISH Z_STREAM_END WINDOW_AUTOSIZE O_CREAT O_WRONLY OMAPFB_WAITFORVSYNC O_RDWR DIGCF_PRESENT DIGCF_DEVICEINTERFACE FBIO_WAITFORVSYNC ERROR_NO_MORE_ITEMS NO_ERROR SDL_FULLSCREEN MB_OK SCREEEN_APPLICATION_CONTEXT MIX_DEFAULT_FORMAT O_RDONLY SDL_INIT_VIDEO SDLK_a SDL_KEYDOWN SDL_HWSURFACE SDLK_x SDL_MOUSEMOTION SDL_MOUSEBUTTONDOWN SDL_MOUSEBUTTONUP SDL_SRCCOLORKEY WdfDeviceIoBuffered PURGE_TXABORT SEEK_END SEEK_SET WdfDeviceIoDirect SDL_INIT_EVERYTHING SDL_SWSURFACE PURGE_RXABORT PURGE_TXCLEAR WdfIoQueueDispatchSequential WDF_NO_OBJECT_ATTRIBUTES WDF_NO_HANDLE PURGE_RXCLEAR WdfDeviceIoNeither NOPARITY ONESTOPBIT DTR_CONTROL_ENABLE RTS_CONTROL_ENABLE LowPagePriority DO_DIRECT_IO CBR_9600 MAXDWORD IO_NO_INCREMENT STATUS_SUCCESS GENERIC_READ FB_ACTIVATE_NOW IRP_MN_REMOVE_DEVICE GENERIC_WRITE IRP_MJ_PNP METHOD_BUFFERED SDL_DOUBLEBUF IRP_MJ_DEVICE_CONTROL _THIS STATUS_PENDING NULL FILE_ANY_ACCESS METHOD_OUT_DIRECT FBIOPAN_DISPLAY METHOD_IN_DIRECT METHOD_NEITHER FILE_SHARE_READ OBJ_CASE_INSENSITIVE KEY_ALL_ACCESS STATUS_CANCELLED STATUS_BUFFER_TOO_SMALL STATUS_BUFFER_OVERFLOW FILE_FLAG_OVERLAPPED NonPagedPool KeyValuePartialInformation DISPATCH_LEVEL KernelMode OPEN_EXISTING IN OUT FILE_ATTRIBUTE_NORMAL INFINITE THREAD_ALL_ACCESS INVALID_HANDLE_VALUE IRP_MJ_CREATE IRP_MJ_CLOSE IRP_MJ_WRITE IRP_MJ_READ EXCEPTION_EXECUTE_HANDLER MAXIMUM_ALLOWED STATUS_DEVICE_NOT_READY FILE_SHARE_WRITE FILE_DEVICE_UNKNOWN Executive FALSE TRUE DO_BUFFERED_IO DO_DEVICE_INITIALIZING RTL_REGISTRY_ABSOLUTE RTL_QUERY_REGISTRY_DIRECT REG_DWORD REG_NONE';
    var my_keyword = '__restrict__ unused inline __label__ oneshot probe _stdcall __attribute__ func MAX_THREAD import RTLD_NOW package __declspec dllexport sfr enum EXPORT_SYMBOL __user __iomem mov text data global equ next __func__ using namespace __thiscall continue __asm__ __volatile__ struct return abs volatile switch break __cdecl static __init __exit addr and stdcall array Nil as asm begin default cardinal __init_refok case class comp constructor currency destructor div do downto else end except exports extended false file finalization finally for function goto if implementation in inherited initialization interface is label library mod not object of on or packed private procedure program property protected public published raise record WINAPI typedef __stdcall repeat set shl shr then threadvar to true try type unit until uses val var varirnt while with word write writeln xor __try __except extern';
    var my_type = 'mypt OrderedStream memcg_cache_array mem_cgroup probe_6362_locals context stap_be_probe _stp_msg_start proc_ops kmem_cache mdp_display_commit GLfloat GLuint ushort vc_data SDL_GLContext msm_fb_data_type GLubyte SDL_RendererInfo sockaddr sockaddr_un Sint16 PKKERNEL_ROUTINE PKRUNDOWN_ROUTINE PKNORMAL_ROUTINE KPROCESSOR_MODE PKAPC PETHREAD PRKAPC KPRIORITY KAPC KAPC_ENVIRONMENT _KAPC_ENVIRONMENT KSEMAPHORE KMUTEX KEVENT DIR dirent device_attribute backlight_device GAME_ROMS timespec PIMAGE_INFO fmt kconf_id yy_state_type UINT16 register COMMTIMEOUTS font_t INT8 UBYTE UWORD omapfb_mem_info omapfb_plane_info musb SDL_Thread UINT8 xdata __xdata softirq_action gpio_pin_value_t dev_pm_ops mtfb_init mtfb_exit platform_driver am335x_lcdc_platform_data amfb mtfb platform_device fb_ops mutex delayed_work of_device_id fb_info resource_size_t u16 dma_addr_t u_short u32 fb_videomode am335x_fb_par resource input_dev gzFile u8 clk device cdev loff_t spinlock_t ssize_t inode task_struct kthread_handler kthread_should_stop kthread_create wake_up_process kthread_stop work_struct workqueue_struct tasklet_struct irqreturn_t timer_list vidmem_bucket drm_fb_helper drm_fb_helper_surface_size drm_mode_destroy_dumb drmEventContext drmModeConnector drmModeRes drm_mode_map_dumb drm_mode_create_dumb buffer_object SDL_PixelFormat SDL_Joystick rfbClient SDL_Keycode rfbKeySym SDL_Texture SDL_Window va_list time_t SDL_Renderer js_event CView input_event rfbBool CCreateContext SIZE auto CMyScrollView CDialog CMenu PCSTR BITMAPINFO BITMAP LPCTSTR HBITMAP HDC PUSB_CONFIGURATION_DESCRIPTOR BITMAPFILEHEADER BITMAPINFOHEADER USBDEVICEINFO PUSB_NODE_CONNECTION_INFORMATION USB_NODE_CONNECTION_INFORMATION USB_NODE_CONNECTION_INFORMATION_EX USB_PIPE_INFO PUSBDEVICEINFO PUSBHOSTCONTROLLERINFO PUSB_NODE_CONNECTION_INFORMATION_EX PUSB_DESCRIPTOR_REQUEST PSTRING_DESCRIPTOR_NODE PUSB_NODE_INFORMATION USBEXTERNALHUBINFO USBROOTHUBINFO USB_NODE_INFORMATION PUSBEXTERNALHUBINFO PUSBROOTHUBINFO USBHOSTCONTROLLERINFO NM_TREEVIEW PCHAR ListEntry PSP_DEVICE_INTERFACE_DETAIL_DATA LPGUID LPNMHDR SP_DEVICE_INTERFACE_DETAIL_DATA DEVINST CONFIGRET HTREEITEM HFONT HIMAGELIST HICON DEV_BROADCAST_DEVICEINTERFACE _GUID LPCREATESTRUCT UINT WPARAM RECT MSG HACCEL LPSTR BOOL LPFN_ISWOW64PROCESS HRSRC HGLOBAL HGLOBAL SDL_TimerID QApplication QWidget QLabel fb_var_screeninfo fb_fix_screeninfo gpointer HildonProgram GtkWidget MouseCallback hidraw_devinfo hidraw_report_descriptor SDL_RWops OutputArray _Tp virtual TrackbarCallback InputArray InputArrayOfArrays InputOutputArray OutputArrayOfArrays Size Point uint32_t Vec3b ShapeContextDistanceExtractor uint16_t Vec4i float string Mat uint8_t z_stream PSP_INTERFACE_DEVICE_DETAIL_DATA VideoCapture SP_INTERFACE_DEVICE_DETAIL_DATA _HIDD_ATTRIBUTES GUID Display const Window HDEVINFO XWMHints TCHAR SP_DEVICE_INTERFACE_DATA HRESULT HINSTANCE HINSTANCE LPTSTR double FastLineDetector Vec4f int64 vector WDFTIMER iconv_t Mix_Music WDF_TIMER_CONFIG WDF_OBJECT_ATTRIBUTES TTF_Font SDL_Event PMDL WDFMEMORY Mix_Chunk WDFREQUEST WDFFILEOBJECT SDL_Color screen_context_t PWDF_FILEOBJECT_CONFIG size_t WDFQUEUE PFN_WDF_DEVICE_FILE_CREATE PFN_WDF_FILE_CLOSE PFN_WDF_FILE_CLEANUP HWND LRESULT LPARAM CFileDialog CWnd LPVOID __int8 _COMMTIMEOUTS _DCB CString _DWORD this _BYTE bool __int16 WDF_DRIVER_CONFIG DCB short FILE PHANDLE HANDLE _KDPC _DEVICE_OBJECT PLIST_ENTRY WDFDRIVER WDFDEVICE WDF_FILEOBJECT_CONFIG WDF_IO_QUEUE_CONFIG PWDFDEVICE_INIT char_device_struct file_operations PIrp PUCHAR Handle VOID _IO_CSQ void Integer int timeval tm Pointer PFILE_OBJECT SDL_VideoDevice SDL_Surface OBJECT_ATTRIBUTES WCHAR KEY_VALUE_PARTIAL_INFORMATION PKEY_VALUE_PARTIAL_INFORMATION PCWSTR UCHAR PWSTR PDriverObject SDL_Rect PUnicodeString Sint32 Uint32 dword TUnicodeString Uint8 ULONG PIoStackLocation PChar PDeviceObject char byte boolean dd db PIRP _IRP IO_STACK_LOCATION PIO_STACK_LOCATION NTSTATUS PKTIMER BOOLEAN LONG PKDPC KDPC PDRIVER_OBJECT KTIMER PUNICODE_STRING ACCESS_MASK POBJECT_ATTRIBUTES PIO_STATUS_BLOCK LPCWSTR LPWSTR wchar_t NT_OPEN_FILE HMODULE NtOpenFileStruct IO_STATUS_BLOCK PDEVICE_OBJECT DEVICE_OBJECT BYTE unsigned long CHAR word LIST_ENTRY byte UNICODE_STRING PVOID DRIVER_OBJECT RTL_QUERY_REGISTRY_TABLE PWCHAR DWORD LARGE_INTEGER OVERLAPPED IO_CSQ KSPIN_LOCK PIO_CSQ KIRQL PKIRQL';
    var my_function = 'countPrefixes findFinalValue calPoints kWeakestRows maximumUnits replaceElements heightChecker countNegatives divideArray finalPrices sumOfUnique repeatedNTimes sortArrayByParity busyStudent arrayPairSum diStringMatch findNumbers log10 sumZero prefixCount numberOfPairs targetIndices findGCD minOperations oddCells firstPalindrome largestAltitude countGoodRectangles subsetXORSum pow maxProduct minTimeToVisitAllPoints diagonalSum flipAndInvertImage uniqueMorseRepresentations countPairs countGoodTriplets maxProductDifference truncateSentence countConsistentStrings arrayStringsAreEqual countKDifference qsort minMovesToSeat sumOddLengthSubarrays countMatches orderedStreamCreate orderedStreamInsert orderedStreamFree restoreString createTargetArray decode decompressRLElist smallerNumbersThanCurrent kidsWithCandies numIdenticalPairs mostWordsFound shuffle maximumWealth summaryRanges to_string push_back back missingNumber sort size Solution finalValueAfterOperations runningSum getConcatenation buildArray lockdep_is_held memcg_cache_id get_online_cpus get_online_mems list_for_each_entry rcu_dereference_protected memcg_deactivate_kmem_caches probe_6364 atomic_set unlikely _stp_exit session_state probe_6362 probe_6363 probe_6334 function___global_exit__overload_0 _stp_print_flush _stp_print STAP_PROBE_INIT stap_probe enter_be_probe systemtap_module_init _stp_handle_start proc_read proc_write proc_open proc_close proc_poll proc_release poll _stp_ctl_read_cmd _stp_ctl_write_cmd _stp_ctl_open_cmd _stp_ctl_close_cmd _stp_ctl_poll_cmd proc_create _stp_debugfs_register_ctl_channel_fs _stp_procfs_register_ctl_channel_fs _stp_register_ctl_channel_fs _stp_transport_fs_init _stp_register_ctl_channel _stp_print_init errk _stp_module_update_self _stp_transport_data_fs_start _stp_ctl_send_notify init_module get_random_bytes systemtap_kernel_module_init _stp_transport_init systemtap_kernel_module_exit kmemcg_cache_deactivate WARN_ON_ONCE is_root_cache SDL_getenv FB_AddMode spin_trylock vt_console_print DEFINE_SPINLOCK msm_fb_pan_idle DEFINE_SEMAPHORE complete_all wait_for_completion_interruptible_timeout msm_fb_pan_display msm_fb_pan_display_ex test1 test2 test3 glViewport glGetAttribLocation glGetUniformLocation glUniform4f glVertexAttribPointer glEnableVertexAttribArray glDrawArrays SDL_GL_SwapWindow glCreateShader glShaderSource glCompileShader glCreateProgram glAttachShader glLinkProgram glUseProgram glClearColor glClear SDL_GL_SetAttribute SDL_GL_CreateContext glGetString SDL_GL_DeleteContext SDL_assert SDL_ChooseAudioConverters SDL_HasSSE2 SDL_HasNEON SET_CONVERTER_FUNCS fb_init fb_deinit fb_uninit gpio_pull_up gpio_put sleep_ms gpio_set_dir SDL_GetPixelFormatName SDL_GetRendererInfo music_play_complete Mix_HookMusicFinished dlerror out listen unlink socket bind accept connect popen pclose shmget shmat shmdt shmctl backtrace backtrace_symbols_fd bt test characterColor characterRGBA stringColor gfxPrimitivesSetFont bezierColor bezierRGBA polygonColor polygonRGBA aapolygonColor aapolygonRGBA filledPolygonColor filledPolygonRGBA trigonColor trigonRGBA aatrigonColor aatrigonRGBA filledTrigonColor filledTrigonRGBA pieColor pieRGBA filledPieColor filledPieRGBA ellipseColor ellipseRGBA aaellipseColor aaellipseRGBA filledEllipseColor filledEllipseRGBA circleColor circleRGBA aacircleColor aacircleRGBA filledCircleColor filledCircleRGBA lineColor lineRGBA aalineColor aalineRGBA rectangleColor rectangleRGBA boxColor hlineColor hlineRGBA vlineColor vlineRGBA pixelRGBA pixelColor scandir PsGetCurrentThread APC_Handler KeInitializeApc KeInsertQueueApc KeInsertQueueDpc DPC_Handler KeReadStateSemaphore KeReleaseSemaphore KeReleaseMutex KeInitializeSemaphore KeInitializeMutex KeSetEvent KeInitializeEvent RunMe IrpPnp MyThread PsSetLoadImageNotifyRoutine PsRemoveLoadImageNotifyRoutine PsRemoveCreateThreadNotifyRoutine PsSetCreateThreadNotifyRoutine AddDevice Handler IrpDispatch Unload PsSetCreateProcessNotifyRoutine opendir closedir readdir hello dlopen dlclose dlsym test_show kstrtoul DEVICE_ATTR_RW device_create_file xxx_probe test_store set_init_arg repair_env_string run_init_process do_execve getname_kernel backlight_device_set_brightness backlight_device_get_by_type flush analogRead setup get_cpu_ticks cf_get_item_by_name loop CF_BOOL close_game dump_region dr_save_gno cf_init cf_init_cmd_line strrchr strcasecmp load_game_config get_gngeo_dir cf_reset_to_default cf_open_file dr_gno_romname cf_parse_cmd_line remove_path_and_extension clock_gettime Println savefile ImageRemoveCertificate tls kconf_id_lookup set_sprite_palette set_bkg_palette EchoSerial EchoSerialTilEmpty CalcChecksum UploadFile GrabFile SetCommDefaultsPart1 SetCommDefaults OpenSerial CloseSerial SetBaud PurgeSerial PeekSerialByte SendSerialBytes PrUsage LoadFile font_init font_set font_load wrtchr plot_point box gotogxy gprintf plot set_win_data set_win_tiles set_bkg_tiles waitpad waitpadup set_bkg_data set_data set_sprite_data set_sprite_tile joypad move_sprite deinit_fb init_fb spin_unlock_irqrestore spin_lock_irqsave musb_readb musb_readw musb_interrupt musb_call_dma_controller_irq jz_musb_interrupt IMG_SavePNG SDL_SaveBMP SDL_CreateThread SDL_WaitThread set_lut_bw set_lut_red lcd_clear wait_busy DATA cursor CMD ssd1306_cmd ssd1306_data ssd1306_init ssd1306_set_col_addr ssd1306_set_page_addr i2c_write i2c_read i2c_write_byte i2c_read_byte lcd_write_data lcd_set_color cmd i2c_start i2c_stop lcd_write lcd_write_cmd init reset Write color delayms spi_cmd spi_dat enum_hid delay lcd_wr_cmd lcd_wr_dat lcd_init lcd_string SDL_RenderCopyEx boxRGBA SDL_SetSurfaceAlphaMod SDL_BlitScaled _delay_ms softirq_handler open_softirq raise_softirq_irqoff raise_softirq QM_PUTS fpioa_set_function gpio_init gpio_set_drive_mode gpio_set_pin sleep sdelay main mtfb_remove mtfb_suspend mtfb_resume mtfb_alloc_devmem mtfb_free_devmem mtfb_probe mtfb_alloc_gpio mtfb_free_gpio mtfb_mmap remap_pfn_range mtfb_setcolreg mtfb_get_mode mtfb_check_var mtfb_upload_frame_cpu mtfb_refresh_work mtfb_set_par mtfb_enable mtfb_disable mtfb_blank mtfb_gpio_dir mtfb_gpio_get mtfb_gpio_set FB_SetVideoMode reg_assign gpio_get gpio_dir gpio_set gpio_reg_set gpio_reg_get gpio_reg_clr disable_irq enable_irq isr_handler mt7688_get mt7688_dir mt7688_set virt_to_page amfb_exit amfb_init platform_set_drvdata amfb_suspend dev_get_drvdata amfb_resume fb_videomode_to_modelist amfb_alloc_devmem mutex_init INIT_DELAYED_WORK cancel_delayed_work_sync amfb_remove amfb_probe PAGE_ALIGN SetPageReserved amfb_free_devmem schedule_delayed_work amfb_set_par amfb_enable amfb_disable cancel_delayed_work amfb_blank mutex_lock mutex_unlock amfb_setcolreg amfb_get_mode amfb_check_var print_time amfb_upload_frame_cpu amfb_refresh_work container_of dev_err fb_suspend fb_resume platform_get_drvdata of_match_ptr am335x_fb_init platform_driver_register am335x_fb_cleanup platform_driver_unregister devm_request_irq fb_prepare_logo fb_show_logo console_lock fb_set_suspend console_unlock MODULE_DEVICE_TABLE fb_set_var dev_set_drvdata platform_get_irq fb_alloc_cmap fb_videomode_to_var lcm dma_alloc_coherent roundup framebuffer_alloc IS_ERR devm_clk_get clk_set_rate pm_runtime_enable pm_runtime_get_sync platform_get_resource devm_request_and_ioremap devm_clk_get devm_kzalloc pm_runtime_put_sync ioread32 fb_probe pm_runtime_disable framebuffer_release fb_var_to_videomode fb_set_par am335xfb_set_par fb_fillrect cfb_fillrect fb_copyarea cfb_copyarea fb_imageblit cfb_imageblit lcdc_irq_handler fb_remove unregister_framebuffer fb_dealloc_cmap dma_free_coherent fb_check_var CNVT_TOHW fb_setcolreg iowrite32 ili9335_init ili9335_send_register show_color do_output ili9335_send_data mdelay ili9335_reset ili9335_send_command input_allocate_device set_bit do_request input_sync report_key input_report_key input_register_device input_unregister_device iounmap ioremap gzgetc _register_divider clk_register_min_divider blink_handler main_init main_exit RCC_PLLConfig unlocked_ioctl myioctl copy_from_user copy_to_user myread mywrite class_create device_create device_destroy class_destroy owner release myopen myclose alloc_chrdev_region cdev_init cdev_add MAJOR MINOR cdev_del unregister_chrdev_region queue_work workqueue_handler alloc_workqueue destroy_workqueue INIT_WORK tasklet_handler tasklet_schedule tasklet_init tasklet_kill gpio_to_irq request_irq free_irq irq_handler gpio_direction_input gpio_get_value del_timer timer_handler mod_timer msecs_to_jiffies setup_timer gpio_request gpio_direction_output gpio_set_value msleep gpio_free ldd_init ldd_exit pr_err ELF32_R_TYPE linux_logo UpdateRects blitFunc SetVideoMode MYSDL_Flip MYSDL_Quit MYSDL_PollEvent MYSDL_Init MYSDL_WasInit MYSDL_InitSubSystem MYSDL_QuitSubSystem MYSDL_SetVideoMode SDL_WasInit rockchip_drm_fbdev_create modeset_create_fb modeset_page_flip_handler sigint_handler drmIoctl drmModeAddFB drmModeRmFB drmModePageFlip drmModeGetConnector drmModeGetResources drmModeSetCrtc drmHandleEvent modeset_destroy_fb drmModeFreeConnector drmModeFreeResources FB_VideoInit do_mmap SDL_JoystickClose get_credential SDL_JoystickEventState SDL_JoystickOpen WaitForMessage HandleRFBServerMessage atexit kbd_leds text_chat rfbInitClient rfbGetClient strcspn SendPointerEvent SendKeyEvent SDL_SetClipboardText got_selection SDL_HasClipboardText SDL_GetClipboardText rfbClientLog SendClientCutText SDL_HasClipboardText SendFramebufferUpdateRequest va_start time strftime va_end localtime cleanup SDL_QuitSubSystem SDL_InitSubSystem rfbClientCleanup handleSDLEvent vfprintf utf8char2rfbKeySym update fflush TextChatOpen SDL_key2rfbKeySym SDL_SetWindowSize SDL_CreateRenderer SDL_GetError SDL_SetHint SDL_RenderSetLogicalSize SDL_DestroyTexture rfbClientGetClientData rfbClientSetClientData rfbClientErr SetFormatAndEncodings SDL_CreateWindow SDL_DestroyRenderer SDL_DestroyWindow SDL_CreateWindowAndRenderer SDL_CreateTexture SDL_UpdateTexture SDL_RenderClear SDL_RenderCopy SDL_RenderPresent fgetl str2double imwrite isOpened get get_ticks write_brightness save_cpu_info read_brightness restore_cpu_info min_cpu dbg gettimeofday atoi GetOperandValue NextHead MinEA GetOpType GetMnem GetOpnd Dword GetDisasm Message GetEntryPoint GetEntryOrdinal getenv zip_compress zip_decompress lz77_compress lz77_decompress DBG flip_screen GetPrivateProfileString show exec RUNTIME_CLASS SetScrollSizes EnableScrollBar OnInitialUpdate CreateObject Create GetSystemMenu LoadString AppendMenu IsEmpty OnInitDialog ASSERT GetKeyState GetKeyboardState GetAsyncKeyState MakeSureDirectoryPathExists OutputDebugString DeleteObject ReleaseDC CaptureImage GetDIBits CreateCompatibleBitmap SelectObject BitBlt GetObject GetDC CreateCompatibleDC GetSystemMetrics GetDriverKeyName GetExternalHubName EnumerateHub EnumerateHubPorts SetupDiEnumDeviceInfo GetConfigDescriptor AreThereStringDescriptors GetAllStringDescriptors EnumerateHostController CM_Get_Child CM_Get_Sibling CM_Get_Parent _stricmp CM_Get_Device_ID WalkTree AddLeaf ALLOC GetHCDDriverKeyName FREE DriverNameToDeviceDesc GetRootHubName CM_Locate_DevNode EnumerateHostControllers CreateDialog CreateTextBuffer CreateMainWindow DestroyTextBuffer CHECKFORLEAKS RefreshTree OOPS CM_Get_DevNode_Registry_Property SetupDiEnumDeviceInterfaces SetupDiGetDeviceInterfaceDetail UpdateEditControl DEFINE_GUID GetMenu TreeView_SelectItem SetWindowText TreeView_DeleteAllItems TEXT CreateFont SendMessage RegisterDeviceNotification HANDLE_MSG GetDlgItem ImageList_Create LoadIcon ImageList_AddIcon TreeView_SetImageList GetWindowRect ResizeWindows ShowWindow UpdateWindow LoadCursor LoadAccelerators GetMessage TranslateAccelerator IsDialogMessage TranslateMessage DispatchMessage InitCommonControls GetCurrentProcess LockResource MAKEINTRESOURCE GetModuleHandle FindResource LoadResource SizeofResource GlobalAlloc GlobalLock GlobalUnlock GlobalFree Mix_LoadWAV_RW Mix_LoadMUS_RW SDL_LoadBMP_RW SDL_SetTimer SDL_AddTimer SDL_RemoveTimer SDL_SetAlpha TTF_RenderUTF8_Solid SDL_GetMouseState SDL_SoftStretch stringRGBA gtk_init gtk_window_new gtk_label_new gtk_main_quit feof fgetc strstr strcat strncmp strchr signal mmap munmap SFR SBIT g_print gtk_container_add gtk_widget_show_all GTK_WIDGET GTK_CONTAINER hildon_program_get_instance hildon_program_add_window HILDON_WINDOW g_signal_connect G_OBJECT G_CALLBACK hildon_button_new_with_text hildon_window_new gtk_widget_show gtk_main hildon_gtk_init g_set_application_name SDL_CreateRGBSurface SDL_ConvertSurface IMG_Load_RW system TTF_OpenFontRW fgets erode getStructuringElement dilate morphologyDefaultBorderValue cvtColor convexHull usleep TTF_RenderUTF8_Blended TTF_SizeUTF8 SDL_RWFromMem setMouseCallback circle putText cvRound cos sin line drawContours ellipse Scalar approxPolyDP connectedComponents rand resize createTrackbar moveWindow findContours inflateInit destroyWindow inflate imread namedWindow imshow waitKey inflateEnd HidD_GetHidGuid SetupDiGetClassDevs AfxBeginThread deflateInit deflate deflateEnd DeleteUrlCacheEntry HidD_GetAttributes free SetupDiDestroyDeviceInfoList SetLastError XFlush XOpenDisplay createFastLineDetector getTickFrequency getTickCount SetupDiEnumInterfaceDevice SetupDiGetInterfaceDeviceDetail XGetWMHints XSetWMHints XFree URLDownloadToFile SUCCEEDED MessageBox WDF_TIMER_CONFIG_INIT_PERIODIC WDF_OBJECT_ATTRIBUTES_INIT WdfTimerCreate WdfTimerStart WdfTimerStop WdfDeviceWdmGetDeviceObject WdfRequestSetInformation iconv_open open read write close iconv iconv_close Mix_HaltMusic Mix_PlayChannel Mix_FreeChunk Mix_FreeMusic Mix_CloseAudio SDL_GetTicks Mix_PauseMusic screen_create_context Mix_ResumeMusic Mix_LoadWAV Mix_PlayingMusic Mix_PlayMusic Mix_LoadMUS Mix_OpenAudio SDL_GetKeyState TTF_RenderText_Solid TTF_CloseFont TTF_Quit SDL_PollEvent SDL_MapRGB SDL_SetColorKey SDL_FillRect TTF_Init TTF_OpenFont IMG_Load SDL_DisplayFormat SDL_Init MODULE_DESCRIPTION SDL_LoadBMP SDL_ShowCursor SDL_BlitSurface SDL_Delay SDL_FreeSurface SDL_Quit WdfRequestRetrieveUnsafeUserOutputBuffer WdfRequestProbeAndLockUserBufferForWrite WdfMemoryGetBuffer WdfRequestRetrieveUnsafeUserInputBuffer WdfRequestProbeAndLockUserBufferForRead WdfRequestRetrieveOutputWdmMdl WdfRequestRetrieveInputWdmMdl WdfRequestRetrieveOutputMemory WdfMemoryCopyFromBuffer WdfRequestRetrieveInputMemory WdfMemoryCopyToBuffer WdfRequestComplete WdfRequestCompleteWithInformation SendMessageA SendMessageW DoModal GetFileExt mbsicmp LOBYTE SetupComm GetPathName GetParent FromHandle GetCommState WdfDeviceInitSetIoType WDF_IO_QUEUE_CONFIG_INIT_DEFAULT_QUEUE WdfIoQueueCreate WDF_FILEOBJECT_CONFIG_INIT WdfDeviceInitSetFileObjectConfig WdfDeviceCreate WdfDeviceCreateSymbolicLink fwrite SetCommTimeouts WDF_DRIVER_CONFIG_INIT WdfDriverCreate memcmp sscanf fprintf exit fopen register_chrdev fseek ftell _kbhit _getch fclose assert WdfDeviceInitAssignName fread fputc new delete __register_chrdev_region MODULE_LICENSE SetCommState MODULE_AUTHOR SetCommTimeoutsgMODULE_DESCRIPTION PurgeComm GetLastError printk module_init module_exit do_gettimeofday time_to_tm SDL_Flip SDL_UpdateRect FlipHWSurface FB_FlipHWSurface FB_IsSurfaceBusy FB_WaitBusySurfaces wait_vbl ioctl IoAttachDeviceToDeviceStack SDL_SetError IoSkipCurrentIrpStackLocation SDL_UpdateRects FB_DirectUpdate SDL_SetVideoMode FB_FreeHWSurfaces FB_InitHWSurfaces malloc SDL_malloc IoCallDriver strncpy printf sizeof IoDetachDevice sprintf_s IoCompleteRequest CONTAINING_RECORD NT_SUCCESS UNREFERENCED_PARAMETER StrCopy KeAcquireSpinLock RtlUnicodeStringPrintf InitializeObjectAttributes ZwOpenKey KeReleaseSpinLockFromDpcLevel ZwQueryValueKey KeReleaseSpinLock WriteLn IoStartTimer ExAllocatePoolWithTag IoStopTimer Format FillChar _DriverEntry ExFreePool RtlCopyMemory IoInitializeTimer memset memcpy crt_printf DeviceIoControl KeSetTimerEx wcslen LoadLibrary KeSetTimer IoMarkIrpPending IoStartPacket KeCancelTimer wsprintf sprintf KeInitializeTimer GetProcAddress IsListEmpty GetExceptionCode KeRaiseIrql KeLowerIrql RemoveHeadList InsertHeadList RtlZeroMemory RtlQueryRegistryValues InitializeListHead KeInitializeDpc IoCsqInsertIrp KeInitializeSpinLock KefReleaseSpinLockFromDpcLevel IoCsqInitialize KfAcquireSpinLock KfReleaseSpinLock CancelIo InsertTailList RemoveEntryList MmGetMdlVirtualAddress CreateEvent WaitForSingleObject IoStartNextPacket ProbeForRead strcpy strcmp CTL_CODE strlen WriteFile StrLen crt_memset MmGetMdlByteCount MmGetSystemAddressForMdlSafe IoGetCurrentProcess ReadFile PsTerminateSystemThread ExitProcess DbgPrint KeDelayExecutionThread PsCreateSystemThread CreateFile ObReferenceObjectByHandle ZwClose KeWaitForSingleObject ObDereferenceObject Sleep SleepEx CloseHandle CTA0 IofCompleteRequest IoGetCurrentIrpStackLocation IoDeleteDevice DriverEntry RtlInitUnicodeString IoCreateDevice IoCreateSymbolicLink IoDeleteSymbolicLink';

    this.regexList = [
      {regex: /^ *#.*/gm, css: 'my_preprocessor'},
      {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css:'string'},
      {regex: SyntaxHighlighter.regexLib.singleQuotedString, css:'string'},
      {regex: SyntaxHighlighter.regexLib.multiLineCComments, css:'my_comment'},
      {regex: SyntaxHighlighter.regexLib.singleLineCComments, css:'my_comment'},
      {regex: new RegExp(this.getKeywords(my_type),'gm'), css:'my_type bold'},
      {regex: new RegExp(this.getKeywords(my_keyword),'gm'), css:'my_keyword bold'},
      {regex: new RegExp(this.getKeywords(my_constant),'gm'), css:'my_constant bold'},
      {regex: new RegExp(this.getKeywords(my_function),'gm'), css:'my_function bold'},
    ];
  };

  Brush.prototype  = new SyntaxHighlighter.Highlighter();
  Brush.aliases  = ['cpp', 'c'];
  SyntaxHighlighter.brushes.Cpp = Brush;
  typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
